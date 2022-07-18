
import { Context, ContextManager } from '@opentelemetry/api';
import { SimpleContext } from './SimpleContext';

export class SimpleContextManager implements ContextManager {
  public context: Context = new SimpleContext();

  private _bindFunction<T extends Function>(
    context: Context = new SimpleContext(),
    target: T
  ): T {
    const manager = this;
    const contextWrapper = function (this: unknown, ...args: unknown[]) {
      return manager.with(context, () => target.apply(this, args));
    };
    Object.defineProperty(contextWrapper, 'length', {
      enumerable: false,
      configurable: true,
      writable: false,
      value: target.length,
    });
    return (contextWrapper as unknown) as T;
  }

  /**
   * Returns the active context
   */
  active(): Context {
    return this.context;
  }

  /**
   * Binds a the certain context or the active one to the target function and then returns the target
   * @param context A context (span) to be bind to target
   * @param target a function or event emitter. When target or one of its callbacks is called,
   *  the provided context will be used as the active context for the duration of the call.
   */
  bind<T>(context: Context, target: T): T {
    // if no specific context to propagate is given, we use the current one
    if (context === undefined) {
      context = this.active();
    }
    if (typeof target === 'function') {
      return this._bindFunction(context, target);
    }
    return target;
  }

  disable(): this {
    throw new Error("Method not implemented.")
  }
  enable(): this {
    throw new Error("Method not implemented.")
  }

  /**
   * Calls the callback function [fn] with the provided [context].
   * The context will be set as active
   * @param context
   * @param fn Callback function
   * @param thisArg optional receiver to be used for calling fn
   * @param args optional arguments forwarded to fn
   */
  with<A extends unknown[], F extends (...args: A) => ReturnType<F>>(
    context: Context | null,
    fn: F,
    thisArg?: ThisParameterType<F>,
    ...args: A
  ): ReturnType<F> {
    const previousContext = this.context;
    this.context = context ?? previousContext;

    try {
      return fn.call(thisArg, ...args);
    } finally {
      this.context = previousContext;
    }
  }
}
declare namespace wasm_bindgen {
	/* tslint:disable */
	/* eslint-disable */
	/**
	*/
	export function initialise(): void;
	/**
	* @param {string} input
	* @param {number} timeout
	* @returns {string}
	*/
	export function evaluateFendWithTimeout(input: string, timeout: number): string;
	/**
	* @param {string} input
	* @param {number} timeout
	* @returns {string}
	*/
	export function evaluate_fend_with_timeout(input: string, timeout: number): string;
	/**
	* Takes a '\0'-separated string of inputs, and returns a '\0'-separated string of results
	* @param {string} inputs
	* @param {number} timeout
	* @returns {string}
	*/
	export function evaluateFendWithTimeoutMultiple(inputs: string, timeout: number): string;
	
}

declare type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

declare interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly initialise: () => void;
  readonly evaluateFendWithTimeout: (a: number, b: number, c: number, d: number) => void;
  readonly evaluate_fend_with_timeout: (a: number, b: number, c: number, d: number) => void;
  readonly evaluateFendWithTimeoutMultiple: (a: number, b: number, c: number, d: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
declare function wasm_bindgen (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;

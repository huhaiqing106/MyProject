/**
 * 轮询工具类
 *
 * @class PollingUtil
 */
class PollingUtil {
	constructor(promiseAry, interval = 3000) {
		this.promises = promiseAry; // 轮询 promise组
		this.interval = interval; // 定时
		this.stopFlag = false; // 停止标识
	}

	/**
	 * 轮询 promise组中的每个 promise
	 *
	 * @memberof PollingUtil
	 */
	start() {
		if (Array.isArray(this.promises)) {
			// 同步请求promise组中的每个promise
			async function starter(promise, args = {}) {
				if (!this.stopFlag) {
					// 调用promise
					promise && (await promise(args));
					// 构建当前promise的定时器
					setTimeout(() => {
						starter.bind(this)(promise, args);
					}, this.interval);
				}
			}
			this.promises.forEach((promise) => {
				if (Array.isArray(promise)) {
					// prettier-ignore
					const currPromise = promise[0], currParams = promise[1];
					// 调用启动函数
					starter.bind(this)(currPromise, currParams);
				} else {
					// 调用启动函数
					starter.bind(this)(promise);
				}
			});
		}
	}

	/**
	 * 轮询 promise组中的每个 promise，但是启动控制权交由promise
	 *
	 * @memberof PollingUtil
	 */
	startReverse() {
		if (Array.isArray(this.promises)) {
			const _self = this;

			function Starter(currPromise, currParams) {
				// 构建启动函数，闭包函数作用域
				this.start = function () {
					// 计时器
					setTimeout(() => {
						// 停止标识
						if (!_self.stopFlag) {
							// 构建参数以及定时器
							let params = {
								...currParams,
								timer: new Starter(currPromise, currParams),
							};
							// 调用promise
							currPromise && currPromise(params);
						}
					}, _self.interval);
				};
			}

			this.promises.forEach((promise) => {
				if (Array.isArray(promise)) {
					// 获取传入的promise以及参数
					// prettier-ignore
					let currPromise = promise[0], currParams = promise[1];
					// 组装参数以及构建定时器函数
					let params = {
						...currParams,
						timer: new Starter(currPromise, currParams),
					};
					// 调用promise
					currPromise && currPromise(params);
				} else {
					// 组装参数以及构建定时器函数
					let currParams = {
						params: {},
						timer: new Starter(promise, {}),
					};
					// 调用promise
					promise && promise(currParams);
				}
			});
		}
	}

	/**
	 * 启动轮询 promise组
	 *
	 * @memberof PollingUtil
	 */
	startGroup() {
		// 同步调用整个轮询组
		async function starter() {
			// 停止标识
			if (!this.stopFlag) {
				// 循环promise组
				for (let index = 0; index < this.promises.length; index++) {
					// 获取当前promise
					const promise = this.promises[index];
					if (Array.isArray(promise)) {
						// prettier-ignore
						const currPromise = promise[0], currParams = promise[1];
						// 调用promise
						currPromise && (await currPromise(currParams));
					} else {
						// 调用promise
						promise && (await promise());
					}
				}
				// 启动下次轮询
				setTimeout(() => {
					starter.bind(this)();
				}, this.interval);
			}
		}
		if (!Array.isArray(this.promises)) {
			this.promises = [this.promises];
		}
		starter.bind(this)();
	}

	/**
	 * 停止轮询
	 *
	 * @memberof PollingUtil
	 */
	stop() {
		this.stopFlag = true;
	}
}

export default PollingUtil;

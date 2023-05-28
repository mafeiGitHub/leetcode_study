// 请你编写一个函数，它接收另一个函数作为输入，并返回该函数的 记忆化 后的结果。
/**
 * @param {Function} fn
 */
function memoize(fn) {
    const cache = new Map()
    return function(...args) {
        const key = JSON.stringify(args)
        if(!cache.has(key)){
            cache.set(key,fn(...args))
        }
       return cache.get(key)

    }
}
/*这段代码是一个用于缓存函数结果的函数。它接受一个函数 `fn` 作为参数，返回一个新的函数。新函数接受任意数量的参数，会将这些参数序列化为一个字符串作为缓存的 key，如果缓存中存在该 key 对应的值，直接返回，否则调用 `fn` 计算结果，并将结果缓存起来，再返回结果。

具体解释如下：

1. `const map = new Map()` 创建一个新的 Map 对象，用于存储缓存的结果。
2. `return function (...args)` 返回一个新函数，这个新函数可以接受任意数量的参数，使用 rest parameters 语法将参数打包成一个数组 `args`。
3. `const key = JSON.stringify(args)` 将参数序列化为一个字符串作为缓存的 key。
4. `if (!map.has(key)) { map.set(key, fn(...args)) }` 如果缓存中不存在该 key，调用原始函数 `fn` 计算结果，并将结果缓存起来。
5. `return map.get(key)` 返回缓存中对应 key 的值。

使用该函数可以避免重复计算某些函数的结果，提高代码执行效率。但需要注意的是，如果参数过多或者参数中包含复杂对象，序列化的字符串可能会非常长，导致缓存效果不佳。*/

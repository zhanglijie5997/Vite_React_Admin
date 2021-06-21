
interface DefaultTrees {
    parentId: number,
    name: string,
    permission: string,
    type: number,
    id: number
}

/**
 * 一位数组转换树状
 * @param items 
 * @param id 
 * @returns 
 */
export const trees = <T>(items: Array<T & DefaultTrees>, id: number = 0): any => {
    return items
                .filter(item => item.parentId === id)
                .map(item => {
                    const tem = { 
                        ...item, 
                        title: item.name,
                        code: item.permission,
                        value: item.permission
                    }
                    return item.type === 1 ? {...tem, children: trees(items, item.id)} : tem;
                });
}
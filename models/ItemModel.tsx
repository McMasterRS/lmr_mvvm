import {useCallback, useState} from 'react'
import {getAllItems, Item, postItem, removeItem} from "@/app/api/items/item";

const ItemModel = () => {
    const [items, setItems] = useState<Item[]>([]);

    const getItems = useCallback(async () => {
        const fetched_items = await getAllItems()
        if (fetched_items) {
            setItems(fetched_items)
        }
    }, [])

    const addItem = useCallback(async (itemText: string) => {
        if (Array.isArray(items)) {
            const response = await postItem(itemText)

            if (response !== null) {
                const fetched_items = await getAllItems()
                if (fetched_items) {
                    setItems(fetched_items)
                }
            }
        }
    }, [items])

    const deleteLastItem = useCallback(async () => {
        if (Array.isArray(items)) {
            const response = await removeItem()

            if (response !== null) {
                const fetched_items = await getAllItems()
                if (fetched_items) {
                    setItems(fetched_items)
                }
            }
        }
    }, [items])

    return {
        items: items,
        getItems,
        addItem,
        deleteLastItem
    }
}

export default ItemModel
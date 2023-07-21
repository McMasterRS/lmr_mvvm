import ItemModel from "@/models/ItemModel";
import {useCallback, useEffect, useState} from "react";


const ItemViewModel = () => {
    const [itemName, setItemName] = useState<string>('');
    const { items, getItems, addItem, deleteLastItem } = ItemModel()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value) {
            setItemName(event.target.value);
        }
    }

    const handleAddItem = useCallback(async () => {
        if (itemName) {
            await addItem(itemName)
            setItemName('');
        }
    }, [addItem, itemName])

    const handleDeleteItem = useCallback(async () => {
        await deleteLastItem()

    }, [deleteLastItem])

    useEffect(() => {
        getItems()
    }, [getItems])


    return {
        itemName,
        items,
        handleChange,
        handleAddItem,
        handleDeleteItem,
    }
}

export default ItemViewModel
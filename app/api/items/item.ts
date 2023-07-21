export interface Item {
    id: number,
    name: string
}

export const getAllItems = async (): Promise<Item[] | null> => {
    const response = await fetch('/api/items/fetch')
    if (!response.ok) {
        throw new Error('Failed to get all articles')
    }
    const data = await response.json()
    return data
}

export const postItem = async (itemText: string): Promise<Item | null> => {
    const response = await fetch('/api/items/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({itemText}
        ),
    })
    if (!response.ok) {
        throw new Error('Failed to add item')
    }
    const data = await response.json()
    return data
}

export const removeItem = async (): Promise<void> => {
    const response = await fetch('/api/items/delete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    if (!response.ok) {
        throw new Error('Failed to add item')
    }
    const data = await response.json()
    return data
}
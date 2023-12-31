'use client';

import styles from './page.module.css'
import {Box, Grid, List, ListItem, Stack, TextField, Typography} from "@mui/material";
import styled from '@emotion/styled'
import MuiButton, {ButtonProps} from '@mui/material/Button'
import {useEffect, useState} from "react";


// Custom Button
interface CustomButtonProps extends ButtonProps {
    mainColor: string
}

const CustomButton = styled(MuiButton, {shouldForwardProp: (prop) => prop !== "mainColor"})<CustomButtonProps>(props => ({
    backgroundColor: props.mainColor === 'green' ? '#77DD77' : '#FF6961',
    ':hover': {
        backgroundColor: props.mainColor === 'green' ? '#18A558':'#A80900',
    },
    borderRadius: 28
}));

const imgStyle = {
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingRight: '30px',
}

interface Item {
    id: number,
    name: string,
    price: number,
}

export default function Home() {
    const [items, setItems] = useState<Item[]>([]);
    const [itemText, setItemText] = useState<string>('');


    // grabbing items from JSON file
    useEffect(() => {
        fetch("/api/items/fetch")
            .then(res => res.text())
            .then(text => { setItems(JSON.parse(text));
            })
    }, [items]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value) {
            setItemText(event.target.value);
        }
    }

    const handleAddItem = async () => {
        if (itemText) {
            const response = await fetch('/api/items/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({itemText}
                ),
            });
            const data = await response.json();
            console.log(data);
            setItemText('');
        }
    };

    const handleDeleteItem = async () => {
        const response = await fetch('/api/items/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data);
    };


    return (
        <main className={styles.main}>
            <>
                <Stack direction={"column"} spacing={2}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Box
                            component="img"
                            alt="Shopping Cart Logo"
                            src="/shopping-cart.png"
                            style={imgStyle}
                        />
                    </div>
                    <TextField id="item-field" label="Item Name" variant="outlined" value={itemText} onChange={handleChange} />
                    <Stack direction={"row"} spacing={2}>
                        <CustomButton mainColor={"green"} variant={"contained"} onClick={handleAddItem}>
                            Add Item
                        </CustomButton>
                        <CustomButton mainColor={"red"} variant={"contained"} onClick={handleDeleteItem}>
                            Delete Last Item
                        </CustomButton>
                    </Stack>
                    <div>
                        <Typography variant={"h1"}>My Shopping List</Typography>
                        <List sx={{ listStyleType: 'disc', pl: 4 }}>
                            {items.map((item: Item) => (
                                <ListItem sx={{ display: 'list-item' }} key={item.id}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={5}>
                                            {item.name}
                                        </Grid>
                                        <Grid item xs={4}>
                                            {"$" + item.price + " CAD"}
                                        </Grid>
                                    </Grid>
                                </ListItem>
                            ))}
                        </List>
                    </div>

                </Stack>
            </>
        </main>
    )
}

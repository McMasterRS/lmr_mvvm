'use client';

import styles from '../styles/page.module.css'
import {Box, Grid, List, ListItem, Stack, TextField, Typography} from "@mui/material";
import {CustomButton} from "@/components/CustomButton/CustomButton";
import ItemViewModel from "@/viewmodels/ItemViewModel";
import {Item} from "@/app/api/items/item";


export default function Home() {
    const {
        itemName,
        items,
        handleChange,
        handleAddItem,
        handleDeleteItem,
    } = ItemViewModel();

    const imgStyle = {
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingRight: '30px',
    }

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
                            sx={{
                                height: '50%',
                                width: '50%',
                            }}
                            component="img"
                            alt="Shopping Cart Logo"
                            src="/assets/shopping-cart.png"
                            style={imgStyle}
                        />
                    </div>
                    <TextField id="item-field" label="Item Name" variant="outlined" value={itemName} onChange={handleChange} />
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

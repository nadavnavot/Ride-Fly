<template>
    <card>
        <cardrow1-col1>
            <div>San Vicente</div>
            <div>5:30</div>
        </cardrow1-col1>
        <cardrow1-col2>
            <DocumentationIcon />
        </cardrow1-col2>
        <cardrow1-col3>
            <div>Seville Airport</div>
            <div>6:00</div>
        </cardrow1-col3>
        <cardrow2-col1>
            <div>Juan</div>
            <div></div>
            <div>4.7</div>
            <svg></svg>
        </cardrow2-col1>
        <card-row2-col2>
            <div>6€</div>
        </card-row2-col2>
    </card>

</template>

<style>
    .card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 300px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
</style>
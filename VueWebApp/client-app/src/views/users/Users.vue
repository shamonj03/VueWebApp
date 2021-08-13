
<template>
    <a-table :columns="columns" :data-source="users" :loading="loading" bordered>
        <template #createdDate="{ text }">
            {{formatDate(text)}}
        </template>
    </a-table>
</template>

<script lang="ts" src="./users.ts"></script>
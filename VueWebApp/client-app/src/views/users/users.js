import { defineComponent } from 'vue';
import { UserClient } from "@/swagger";
import moment from "moment";
export default defineComponent({
    name: "User",
    data() {
        return {
            loading: true,
            users: [],
            columns: [
                {
                    title: "ID",
                    dataIndex: 'id',
                    key: 'id',
                },
                {
                    title: "First Name",
                    dataIndex: 'firstName',
                    key: 'firstName',
                },
                {
                    title: "Last Name",
                    dataIndex: 'lastName',
                    key: 'lastName',
                },
                {
                    title: "Date Created",
                    dataIndex: 'createdDate',
                    key: 'createdDate',
                    slots: { customRender: 'createdDate' },
                }
            ]
        };
    },
    async mounted() {
        const client = new UserClient();
        this.users = await client.getUsers();
        this.loading = false;
    },
    methods: {
        formatDate(date) {
            return moment(date).format('l').toString();
        }
    }
});
//# sourceMappingURL=users.js.map
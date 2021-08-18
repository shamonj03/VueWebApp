import { defineComponent } from 'vue'
import { UserClient, UserDto } from "@/services/swagger"
import moment from "moment"

export default defineComponent({
    name: "User",

    data() {
        return {
            loading: true,

            users: [] as UserDto[],

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
        }
    },

    async mounted() {
       const client = new UserClient();

       this.users = await client.getUsers();

       this.loading = false;
    },

    methods: {
        formatDate(date: Date): string {
            return moment(date).format('l').toString();
        }
    }
})

import { defineComponent } from 'vue'
import { UserClient, UserDto } from "@/swagger"

export default defineComponent({
    name: "HelloWorld",

    props: {
        msg: String
    }
})

<template>
    <div>
        <School/>
        <School/>
        <School/>
    </div>
</template>
<script>
    import School from './components/School'
    export default{
        name:'School',
        data() {
            return {
                name:'App',
                components:{
                    School
                }
            }
        },
    }
</script>


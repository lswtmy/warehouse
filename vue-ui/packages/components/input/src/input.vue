<template>
    <div>
        <input type="text" :placeholder="placeholder">
    </div>
</template>

<script>
export default {
    name: 'vue-input',
    data () {
        return {
        };
    },
    props: {
        placeholder: {
            type: String,
            default: '',
        }
    }
}
</script>
<style lang='scss' scoped>

</style>
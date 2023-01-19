<template>
    <div>
        <h1>
            All Books
        </h1>
        <router-link to="/catalog/book/create">
            <button>
                Add new book
            </button>
        </router-link>
        <hr>
        <hr>
        <div v-for="book in books" :key="book._id">
            <router-link class="item" v-bind:to="`/catalog/book/${book._id}`" >
             
                <p>
                    <em><u>Title</u> :</em> {{ book.title }} | <em><u>ISBN</u> :</em> <b>{{ book.isbn }}</b>
                </p>
                <p>
                    <em><u>Author</u> :</em> {{ book.author.first_name }} {{ book.author.family_name }}
                </p>
            </router-link>
            <button @click="rm" v-bind:id="book._id">
                delete book
            </button>
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            books:[]
        }
    },
    methods:{
        rm:function(e) {
            console.log(e.target.id);
            fetch(`http://localhost:3000/catalog/book/${e.target.id}/delete`,{
                method:'post',
                headers: {
                    Accept: 'application/json'
                },
                mode:'no-cors'
            }).then(res => res.text()).then(data => {
                location.reload()
            })
        }
    },
    created() {
        fetch('http://localhost:3000/catalog/books',{
            method: 'get',
            headers: {
                Accept: 'application/json'
            }}
        )
        .then(res => res.json())
        .then(data => {
            this.books=data.list_books
        })
        .catch(err => console.log(err))
    }
}
</script>
<style>
.item {
    text-decoration: none;
    color: black;
}
</style>
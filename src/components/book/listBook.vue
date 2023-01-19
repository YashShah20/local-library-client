<template>
    <div>
        <h2>Summary</h2>
        <p>
            <em><u>Title</u> :</em> {{ book.title }} | <em><u>ISBN</u> :</em> <b>{{ book.isbn }}</b>
        </p>
        <p>
            <em><u>Author</u> :</em> {{ book.author.first_name }} {{ book.author.family_name }}
        </p>
        <p><em><u>Summary</u> : </em></p>
        <article> {{ book.summary }}</article>
        <p><em><u>Genres</u> :</em></p>
        <ul>
            <li v-for="genre in book.genre">
                {{ genre.name }}
            </li>
        </ul>
        <hr>
        <h2>Prints</h2>
        <ol>

            <li v-for="print in prints" :key="print._id">
                Printed by : {{ print.imprint }}
                <br>
                Status : {{ print.status }}
                <br>
                Due Date : {{ print.due_back }}
            </li>
        </ol>
    </div>
</template>
<script>

module.exports = {
    data() {
        return {
            book: {},
            prints: []
        }
    },
    created() {
        fetch(`http://localhost:3000/catalog/book/${this.$route.params.id}`).then(res => res.json()).then(data => {
            this.book = data.results.book;
            this.prints = data.results.prints;
            console.log(this.book);
        })
    }

}
</script>

<style>

</style>
<template>
    <div>
        <h2>
            <!-- {
            "title": "The Wise Man's Fear (The Kingkiller Chronicle, #2)",
            "author": {
            "_id": "63c7d9cf340afa0b0c2bb185"
            },
            "summary": "Picking up the tale of Kvothe Kingkiller once again, we follow him into exile, into political
            intrigue, courtship, adventure, love and magic... and further along the path that has turned Kvothe, the
            mightiest magician of his age, a legend in his own time, into Kote, the unassuming pub landlord.",
            "isbn": "9788401352836",
            "genre": [
            {
            "_id": "63c7d9d1340afa0b0c2bb190"
            }
            ]
            } -->

        </h2>
        <form action="">

            Title : <input type="text" v-model="book.title" placeholder="enter title...">
            <br>
            Auhtor : <input type="text" v-model="book.author._id" placeholder="enter author id...">
            <br>
            Summary : <textarea v-model="book.summary"></textarea>
            <br>
            ISBN : <input type="text" v-model="book.isbn">
            <br><br>
            genre :
            <select multiple>
                <option v-for="genre in genres" v-bind:value="genre._id">{{ genre.name }}</option>
            </select>
            <button @click="add">
                Add
            </button>
        </form>
        {{ book }}
    </div>
</template>

<script>
module.exports = {
    methods: {
        add: function () {
            fetch(`http://localhost:3000/catalog/book/create`, {
                method: 'post',
                body: this.book
            }).then(res => res.text()).then(data => {
                console.log(data);
            })
        }
    },
    data() {
        return {
            book: {
                title: 'e Mans Fear',
                author: {
                    _id: '63c7d9cf340afa0b0c2bb185',
                },
                summary: `cking up the tale of Kvothe Kingkiller once again, we follow him into exile, into political
            intrigue, courtship, adventure, love and magic... and further along the path that has turned Kvothe, the
            mightiest magician`,
                isbn: '9788401352836'
            },
            genres: []
        }
    },
    created() {
        console.log('hii');
        fetch(`http://localhost:3000/catalog/genres`, {
            method: 'get',
            headers: {
                Accept: 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.results);
                this.genres = data.results;
            })
    }

}
</script>
<style>

</style>
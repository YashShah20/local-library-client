import listBooks from "./components/book/listBooks.vue";
import listBook from "./components/book/listBook.vue";
import addBook from "./components/book/addBook.vue";
export default [
    {
      path: "/catalog/book/create",
      excat:true,
      component: addBook
    },
    {
        path: "/catalog/books",
        component: listBooks
    },
    {
        path: "/catalog/book/:id",
        component: listBook
    },
];

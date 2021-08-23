

module.exports = {
    index(req, res){
            const posts =  [{
                author: {
                    name: "Fulano",
                },
                created_at: "10/10/2021",
                title: "Este é um post sobre JS",
                description: "JS é uma linguagem de programação muito top",
                image: "https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg.webp",
                gist: "https://github.com/SamuelGoulart",
                categories: [
                    "JS", "Back-end", "Express"
                ],
                coments: [
                    {
                        author: {
                            name: "Ciclano",
                        },
                        created_at: "11/10/2021",
                        description: "Realmente JS é muito legal",
                    }
                ]
            }];
        res.send(posts)
    },

    find(req,res){

    },

    store(req, res){

    },

    update(req, res){

    },

    delete(req,res){

    }

}

module.exports = posts;
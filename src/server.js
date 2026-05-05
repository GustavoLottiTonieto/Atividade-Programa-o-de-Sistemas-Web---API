// Gustavo Lotti Tonieto - 3 periodo
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        mensagem: 'API REST para gerenciar um acervo de livros'
    });
});

app.get('/livros', (req, res) => {
    const { genero } = req.query;

    if (genero) {
        const livrosFiltrados = livros.filter(livro =>
            livro.genero.toLowerCase().includes(genero.toLowerCase())
        );

        return res.json(livrosFiltrados);
    }

    res.json(livros);
});

app.get('/livros/:id', (req, res) => {
    const id = Number(req.params.id);
    const livro = livros.find(livro => livro.id === id);

    if (!livro) {
        return res.status(404).json({ erro: 'Livro nao encontrado.' });
    }

    res.json(livro);
});

app.post('/livros', (req, res) => {
    const { titulo, autor, ano, genero } = req.body;

    if (!titulo || !autor || !ano || !genero) {
        return res.status(400).json({
            erro: 'Titulo, autor, ano e genero sao campos obrigatorios'
        });
    }

    const novoLivro = new Livro(
        proximoId++,
        titulo,
        autor,
        ano,
        genero
    );

    livros.push(novoLivro);

    res.status(201).json(novoLivro);
});

app.put('/livros/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = livros.findIndex(livro => livro.id === id);

    if (index < 0) {
        return res.status(404).json({ erro: 'Livro nao encontrado.' });
    }

    const { titulo, autor, ano, genero } = req.body;

    if (!titulo || !autor || !ano || !genero) {
        return res.status(400).json({
            erro: 'Titulo, autor, ano e genero sao campos obrigatorios'
        });
    }

    Object.assign(livros[index], {
        titulo, autor, ano, genero
    });

    res.status(200).json(livros[index]);
});

app.patch('/livros/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = livros.findIndex(livro => livro.id === id);

    if (index < 0) {
        return res.status(404).json({ erro: 'Livro nao encontrado.' });
    }

    const { titulo, genero } = req.body;

    if (titulo === undefined && genero === undefined) {
        return res.status(400).json({
            erro: 'Informe titulo ou genero para atualizar'
        });
    }

    if (titulo !== undefined) livros[index].titulo = titulo;
    if (genero !== undefined) livros[index].genero = genero;

    res.status(200).json(livros[index]);
});

app.delete('/livros/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = livros.findIndex(livro => livro.id === id);

    if (index < 0) {
        return res.status(404).json({ erro: 'Livro nao encontrado.' });
    }

    livros.splice(index, 1);

    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});

class Livro {
    constructor(id, titulo, autor, ano, genero) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.genero = genero;
    }
}

let livros = [];
let proximoId = 1;

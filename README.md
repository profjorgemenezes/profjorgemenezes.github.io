# Landing page — Aulas Particulares de Matemática

Site institucional responsivo para divulgação de aulas particulares de Matemática em Fortaleza (CE).

## Arquivos

- `index.html` — estrutura e conteúdo da página.
- `style.css` — identidade visual e layout responsivo.
- `script.js` — menu mobile, ano automático e link do WhatsApp.
- `assets/` — pasta reservada para imagens locais, caso queira substituir as imagens externas.

## Antes de publicar

1. Abra `script.js`.
2. Localize `WHATSAPP_NUMBER`.
3. Substitua `55SEUDDDSEUNUMERO` pelo número com código do Brasil, DDD e telefone, somente números.
   - Exemplo fictício: `5585999999999`.
4. Revise o texto e as informações de atendimento para refletirem sua disponibilidade real.

As imagens atuais são carregadas de URLs públicas do Unsplash. Para hospedar tudo localmente, baixe imagens de uso permitido, coloque-as em `assets/` e atualize os caminhos `src` no `index.html`.

## Publicar no GitHub Pages

1. Entre em https://github.com e crie um repositório público, por exemplo `aulas-particulares-matematica`.
2. Envie os arquivos desta pasta para a raiz do repositório.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)`, depois clique em **Save**.
6. Aguarde a publicação. O GitHub exibirá o endereço do site na seção Pages.

## Personalização

Edite os textos diretamente no `index.html`. As principais cores estão no início de `style.css`, dentro de `:root`.

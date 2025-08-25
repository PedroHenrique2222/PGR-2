# Portal GR – Notícias de Estância Velha, RS

Portal web desenvolvido para publicação e consulta de notícias locais.  
O projeto utiliza **HTML, CSS e JavaScript** no front-end e conta com **integração completa com Firebase** (Autenticação, Firestore e Hosting).

## 🚀 Funcionalidades

- 📰 **Listagem de notícias** dinâmicas a partir do Firestore.  
- 🔍 **Visualização individual** de cada notícia em página dedicada.  
- 👨‍💻 **Painel administrativo protegido**:
  - Login via Firebase Authentication.
  - Criação, edição e exclusão de notícias (restrito a administradores com *custom claims*).  
- 📱 **Design responsivo** adaptado para dispositivos móveis.  
- 🔒 **Regras de segurança** configuradas no Firestore, permitindo apenas a leitura pública e escrita restrita a administradores.  

## 🛠️ Tecnologias utilizadas

- **Front-end**: HTML5, CSS3, JavaScript  
- **Back-end/BaaS**: Firebase  
  - Firebase Authentication  
  - Cloud Firestore  
  - Firebase Hosting  
- **Deploy**: Vercel  

## 📂 Estrutura do projeto

```
PGR-2/
│
├── index.html         # Página inicial
├── noticia.html       # Página de detalhe da notícia
├── admin.html         # Painel administrativo (restrito a admins)
│
├── /scripts           # Scripts JS (integração Firebase e UI)
│   └── ...
│
├── /styles            # Arquivos CSS
│   └── ...
│
├── /Imagens           # Logos, ícones e imagens usadas no site
│   └── ...
│
└── README.md
```

## ⚙️ Como executar localmente

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/PedroHenrique2222/PGR-2.git
   cd PGR-2
   ```

2. **Instalar dependências (opcional)**  
   O projeto não utiliza bundlers, mas recomenda-se servir os arquivos com um servidor local (ex.: Live Server no VSCode).

3. **Configurar Firebase**  
   - Criar um projeto no [Firebase Console](https://console.firebase.google.com).  
   - Ativar **Authentication (Email/Senha)**.  
   - Criar o banco no **Cloud Firestore**.  
   - Definir as regras de segurança adequadas:  

   ```js
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // Notícias podem ser lidas por qualquer pessoa
       match /news/{newsId} {
         allow read: if true;

         // Apenas administradores podem escrever
         allow write: if request.auth.token.admin == true;
       }
     }
   }
   ```

   - Copiar as credenciais do Firebase (`firebaseConfig`) e inserir no arquivo `scripts/firebase.js`.

4. **Rodar localmente**  
   Abrir `index.html` no navegador ou servir via `Live Server`.

## 🌐 Deploy

- **Produção**: [Portal GR no Vercel](https://pgr-2.vercel.app)  
- O site também pode ser publicado no **Firebase Hosting**.

## 👥 Acesso administrativo

- O painel `admin.html` só pode ser acessado após login.  
- Permissões administrativas são concedidas via *custom claims* no Firebase.  

---

## 📄 Licença

Este projeto é de uso pessoal/proprietário. Nenhum direito de redistribuição é concedido sem autorização do autor.

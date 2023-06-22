
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Bio from './components/Bio/Bio'
import Footer from './components/Footer/Footer'


import miaPic from "../assets/MiaAndErin.jpg"
import erinPic from "../assets/erin2.jpg"
import './App.css'

function App() {


  return (
    <>
      <Header
        titleText='My Favorite Things'
        titleSize='2.5rem'

      />

      <Bio 
        titleText='Prazer, Mia Luz'
        titleSize='2rem'
        textContent='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi architecto velit alias vitae culpa fugit enim iure voluptas vel, ducimus debitis adipisci nobis dolore dolores, molestias repudiandae omnis quidem assumenda.'
        textSize='1.1rem'
        src={miaPic}
        alt='Foto da mia com sua gata erin que é uma frajolinha olhando pra cima na frente do rosto da mia'
      />

      <main className='cards__container'>
        <Card
          subtitleText='Animes - One Piece'
          textContent ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam reiciendis fugiat sit dolore animi accusamus iusto voluptate fuga temporibus commodi totam, nihil minima deleniti odio quos. Neque consectetur dolorum temporibus!"
          src='https://thumbs.gfycat.com/IgnorantHarmfulChrysalis-small.gif' 
          alt='imagem do anime one piece'
        />

        <Card
          subtitleText='Games - Spiritfarer'

          textContent ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam reiciendis fugiat sit dolore animi accusamus iusto voluptate fuga temporibus commodi totam, nihil minima deleniti odio quos. Neque consectetur dolorum temporibus!"
          src='https://64.media.tumblr.com/d9b551dba41e52ccbe887cf6573ac301/7c1f6918a0543597-98/s640x960/2bc072cd248ebfb02bf4962520d7a1725dd4a7c9.gif' 
          alt='imagem do anime one piece'
        />

        <Card
          subtitleText='My cat: Erin'
          imgId='cat-card__img'
          textContent ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam reiciendis fugiat sit dolore animi accusamus iusto voluptate fuga temporibus commodi totam, nihil minima deleniti odio quos. Neque consectetur dolorum temporibus!"
          src={erinPic}
          alt='foto da gata erin, uma frajolinha'
        />

        <Card
          subtitleText='TTRPG - Ordem Paranormal'

          textContent ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam reiciendis fugiat sit dolore animi accusamus iusto voluptate fuga temporibus commodi totam, nihil minima deleniti odio quos. Neque consectetur dolorum temporibus!"
          src='https://steamuserimages-a.akamaihd.net/ugc/1618471299901825952/77BF8459A70BAD823D45DDC80F38DFAFD593B724/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true' 
          alt='imagem do anime one piece'
        />

        <Card
          subtitleText='Cartoons - Avatar'

          textContent ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam reiciendis fugiat sit dolore animi accusamus iusto voluptate fuga temporibus commodi totam, nihil minima deleniti odio quos. Neque consectetur dolorum temporibus!"
          src='https://media.tenor.com/cOSm-fUQtX0AAAAC/avatar-toph.gif' 
          alt='imagem do anime one piece'
        />

        <Card
          subtitleText='Books - Legendborn'
          imgId='books-card_img'
          textContent ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam reiciendis fugiat sit dolore animi accusamus iusto voluptate fuga temporibus commodi totam, nihil minima deleniti odio quos. Neque consectetur dolorum temporibus!"
          src='https://www.richlandlibrary.com/sites/default/files/styles/4to3_1480x1112/public/2021-05/image-asset.jpeg.webp?itok=KO2bQVK0' 
          alt='imagem do anime one piece'
        />

      </main>
     
     <Footer 
      textContent='Desenvolvido com 💜 por Mia Luz'
     />

    </>

      

  )
}

export default App

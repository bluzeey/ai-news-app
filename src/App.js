import React,{useState,useEffect} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import wordsToNumbers from 'word-to-numbers'
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles'
const alanKey='da09d2951242e3e7b8bd8c6d439e94e62e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
    const classes=useStyles();
    const [newsArticles,setNewsArticles]=useState([])
    const [activeArticle,setActiveArticle]=useState(-1)
    useEffect(()=>{
        alanBtn({
            key:alanKey,
            onCommand:({command,articles,number})=>{
              if(command==='newsHeadlines'){
                  setNewsArticles(articles);
                  setActiveArticle(-1)
              }else if(command==='highlight'){
                  setActiveArticle((prevActiveArticle)=>prevActiveArticle+1)
              }else if (command==='open'){
                   const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
                   const article = articles[parsedNumber - 1];
                  
                  if(parsedNumber>20){
                      alanBtn().playText('Please try that again')
                  }else if(article){
                      window.open(article.url,'_blank')
                      alanBtn().playText('Opening...')
                  }
              };
            }
        })
    },[])
    return (
        <div>
            <div className={classes.logoContainer}>
                <img src='/alan.jpg' alt="Alan Ai logo" className={classes.alanLogo}/>
            </div>
              <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
        </div>
    )
}

export default App

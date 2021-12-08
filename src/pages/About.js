import  NavigationBar  from '../components/NavigationBar';
import '../App.css'

const About = () => {
    return(
        <div>
            <NavigationBar/>

            <div className="aboutText">
                    <p>Just Notes - приложение для создания заметок.
                        Визуально приложение делится на две части ответственные за группировку
                    заметок по папкам(folders) и создание новых заметок и удаление
                    существующих(notes).
                    Все заметки хранятся в словаре(dictionary) с ключами folder, title, date, text.
                    Для ввода текста заметки использовался CKEditor редактор текста который
                    имеет встроенный редактор изображений, менеджер файлов.</p>
            </div>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">INFO </a>
        </div>
    )
}
export default About;
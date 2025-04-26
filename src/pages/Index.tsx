
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F8F6FF]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] py-4 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-white text-2xl font-bold">СловоЛекс</Link>
            <nav>
              <ul className="flex space-x-6">
                <li><Link to="/" className="text-white hover:text-[#E5DEFF] transition-colors font-medium">Главная</Link></li>
                <li><Link to="/dictionary" className="text-white hover:text-[#E5DEFF] transition-colors">Словарь</Link></li>
                <li><Link to="/" className="text-white hover:text-[#E5DEFF] transition-colors">О проекте</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-4">
              Откройте для себя богатство русского языка
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              СловоЛекс — это современный онлайн-словарь, который поможет вам расширить словарный запас и глубже понять значения слов.
            </p>
            <Link to="/dictionary">
              <Button 
                className="bg-[#9b87f5] hover:bg-[#7E69AB] rounded-full px-8 py-6 text-lg font-medium"
              >
                Открыть словарь
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1573592371950-348a8f1d9f38?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600" 
              alt="Открытая книга" 
              className="rounded-2xl shadow-lg w-full object-cover h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1F2C]">Возможности нашего словаря</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-[#E5DEFF] hover-scale">
              <CardContent className="p-8">
                <div className="bg-[#F2FCE2] h-14 w-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#1A1F2C]">Богатый словарный запас</h3>
                <p className="text-gray-600">Более 10,000 слов с подробными определениями и примерами использования.</p>
              </CardContent>
            </Card>
            
            <Card className="border-[#E5DEFF] hover-scale">
              <CardContent className="p-8">
                <div className="bg-[#FFDEE2] h-14 w-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#1A1F2C]">Удобный поиск</h3>
                <p className="text-gray-600">Находите нужные слова быстро и легко с помощью нашей поисковой системы.</p>
              </CardContent>
            </Card>
            
            <Card className="border-[#E5DEFF] hover-scale">
              <CardContent className="p-8">
                <div className="bg-[#D3E4FD] h-14 w-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#1A1F2C]">Этимология слов</h3>
                <p className="text-gray-600">Узнайте происхождение и историю развития слов русского языка.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 container mx-auto px-4">
        <div className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Готовы расширить свой словарный запас?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Начните пользоваться нашим словарем прямо сейчас и откройте для себя удивительный мир слов и их значений.</p>
          <Link to="/dictionary">
            <Button 
              className="bg-white text-[#7E69AB] hover:bg-[#E5DEFF] rounded-full px-8 py-6 text-lg font-medium"
            >
              Перейти к словарю
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1F2C] text-white py-10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="mb-2">© 2025 СловоЛекс. Все права защищены.</p>
            <p className="text-gray-400 text-sm">
              Удобный и современный онлайн-словарь русского языка
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

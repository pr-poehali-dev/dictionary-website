
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F9F5FF]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] py-4 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-white text-2xl font-bold">СленгЧат</Link>
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
              Будь в теме с молодёжным сленгом
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              СленгЧат — твой путеводитель по современному языку молодёжи. Узнай, что значат модные словечки и выражения, чтобы всегда оставаться на волне.
            </p>
            <Link to="/dictionary">
              <Button 
                className="bg-[#8B5CF6] hover:bg-[#7C3AED] rounded-full px-8 py-6 text-lg font-medium"
              >
                Открыть словарь
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600" 
              alt="Молодые люди общаются" 
              className="rounded-2xl shadow-lg w-full object-cover h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1F2C]">Что ты найдешь в нашем словаре</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-[#E5DEFF] hover-scale">
              <CardContent className="p-8">
                <div className="bg-[#F2FCE2] h-14 w-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🔥</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#1A1F2C]">Актуальные выражения</h3>
                <p className="text-gray-600">Свежие словечки из TikTok, Telegram, YouTube и других популярных платформ.</p>
              </CardContent>
            </Card>
            
            <Card className="border-[#E5DEFF] hover-scale">
              <CardContent className="p-8">
                <div className="bg-[#FFDEE2] h-14 w-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#1A1F2C]">Примеры использования</h3>
                <p className="text-gray-600">Узнай, как правильно употреблять сленг в контексте реальных разговоров.</p>
              </CardContent>
            </Card>
            
            <Card className="border-[#E5DEFF] hover-scale">
              <CardContent className="p-8">
                <div className="bg-[#D3E4FD] h-14 w-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🌊</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#1A1F2C]">Происхождение</h3>
                <p className="text-gray-600">История появления популярных фраз и выражений молодежной культуры.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 container mx-auto px-4">
        <div className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Хочешь быть в теме?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Заходи в наш словарь, чтобы всегда понимать, о чём говорит современная молодёжь, и не выглядеть кринжово!</p>
          <Link to="/dictionary">
            <Button 
              className="bg-white text-[#8B5CF6] hover:bg-[#E5DEFF] rounded-full px-8 py-6 text-lg font-medium"
            >
              Зачекать словарь
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1F2C] text-white py-10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="mb-2">© 2025 СленгЧат. Ну ваще кайф!</p>
            <p className="text-gray-400 text-sm">
              Самый топовый словарь молодёжного сленга в рунете
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

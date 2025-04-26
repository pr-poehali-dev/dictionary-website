
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const popularWords = [
  { 
    word: "Краш", 
    definition: "Человек, который сильно нравится, объект симпатии и влюбленности", 
    type: "существительное",
    example: "У меня появился краш на нового одноклассника",
    tags: ["отношения"]
  },
  { 
    word: "Чилить", 
    definition: "Отдыхать, расслабляться, проводить время без напряжения", 
    type: "глагол",
    example: "Сегодня весь день буду чилить дома",
    tags: ["досуг"]
  },
  { 
    word: "Кринж", 
    definition: "Что-то неловкое, стыдное, вызывающее смущение или отвращение", 
    type: "существительное",
    example: "Этот танец учителя — такой кринж",
    tags: ["эмоции"]
  },
];

const categories = [
  { name: "Интернет и соцсети", count: 124 },
  { name: "Отношения", count: 86 },
  { name: "Эмоции и реакции", count: 112 },
];

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-[#F9F5FF]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] py-4 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-white text-2xl font-bold">СленгЧат</Link>
            <nav>
              <ul className="flex space-x-6">
                <li><Link to="/" className="text-white hover:text-[#E5DEFF] transition-colors">Главная</Link></li>
                <li><Link to="/dictionary" className="text-white hover:text-[#E5DEFF] transition-colors font-medium">Словарь</Link></li>
                <li><Link to="/" className="text-white hover:text-[#E5DEFF] transition-colors">О проекте</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-4">
            Словарь молодёжного сленга
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Вбей слово, которое хочешь расшифровать, и будь в курсе всех модных выражений
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <Input
              type="text"
              placeholder="Вбей сленговое слово..."
              className="pl-4 pr-12 py-6 rounded-full shadow-md text-lg border-[#D6BCFA] focus:border-[#8B5CF6]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button 
              className="absolute right-1 top-1 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] h-10 w-10 p-0"
              aria-label="Поиск"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="container mx-auto px-4 pb-16">
        <Tabs defaultValue="popular" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="popular">Топовые слова</TabsTrigger>
            <TabsTrigger value="categories">Категории</TabsTrigger>
            <TabsTrigger value="recent">Свежак</TabsTrigger>
          </TabsList>
          
          <TabsContent value="popular" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {popularWords.map((word, index) => (
                <Card key={index} className="overflow-hidden hover-scale border-[#E5DEFF]">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-xs text-[#7C3AED] font-medium uppercase">{word.type}</div>
                      {word.tags && word.tags.map((tag, i) => (
                        <Badge key={i} className="bg-[#E5DEFF] text-[#7C3AED] hover:bg-[#D6BCFA]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-[#1A1F2C]">{word.word}</h3>
                    <p className="text-gray-600 mb-3">{word.definition}</p>
                    {word.example && (
                      <div className="bg-[#F3F0FB] p-3 rounded-md text-sm italic mb-3">
                        «{word.example}»
                      </div>
                    )}
                    <Button
                      variant="link"
                      className="px-0 text-[#8B5CF6] hover:text-[#7C3AED] mt-2"
                    >
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="categories" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="overflow-hidden hover-scale border-[#E5DEFF] bg-gradient-to-br from-white to-[#F9F5FF]">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#1A1F2C]">{category.name}</h3>
                    <p className="text-gray-600">{category.count} словечек</p>
                    <Button
                      variant="link"
                      className="px-0 text-[#8B5CF6] hover:text-[#7C3AED] mt-2"
                    >
                      Посмотреть
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="recent" className="animate-fade-in">
            <div className="bg-gradient-to-br from-[#E5DEFF] to-[#F9F5FF] rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-2 text-[#1A1F2C]">Скоро здесь появятся свежие сленговые словечки!</h3>
              <p className="text-gray-600 mb-4">Следи за обновлениями и первым узнавай о новых трендах</p>
              <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED]">
                Подписаться на обновления
              </Button>
            </div>
          </TabsContent>
        </Tabs>
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

export default Dictionary;

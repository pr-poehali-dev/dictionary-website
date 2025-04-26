
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const popularWords = [
  { word: "Меланхолия", definition: "Состояние грусти и задумчивости", type: "существительное" },
  { word: "Эйфория", definition: "Состояние интенсивного счастья и возбуждения", type: "существительное" },
  { word: "Амбивалентность", definition: "Наличие смешанных чувств или противоречивых идей", type: "существительное" },
];

const categories = [
  { name: "Повседневные слова", count: 250 },
  { name: "Научные термины", count: 320 },
  { name: "Иностранные заимствования", count: 180 },
];

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-[#F8F6FF]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] py-4 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-white text-2xl font-bold">СловоЛекс</Link>
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
            Найдите нужное слово в нашем словаре
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Более 10,000 слов с подробными определениями, примерами использования и этимологией
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <Input
              type="text"
              placeholder="Введите слово для поиска..."
              className="pl-4 pr-12 py-6 rounded-full shadow-md text-lg border-[#D6BCFA] focus:border-[#9b87f5]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button 
              className="absolute right-1 top-1 rounded-full bg-[#9b87f5] hover:bg-[#7E69AB] h-10 w-10 p-0"
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
            <TabsTrigger value="popular">Популярные слова</TabsTrigger>
            <TabsTrigger value="categories">Категории</TabsTrigger>
            <TabsTrigger value="recent">Недавно добавленные</TabsTrigger>
          </TabsList>
          
          <TabsContent value="popular" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {popularWords.map((word, index) => (
                <Card key={index} className="overflow-hidden hover-scale border-[#E5DEFF]">
                  <CardContent className="p-6">
                    <div className="text-xs text-[#7E69AB] font-medium uppercase mb-1">{word.type}</div>
                    <h3 className="text-xl font-bold mb-2 text-[#1A1F2C]">{word.word}</h3>
                    <p className="text-gray-600">{word.definition}</p>
                    <Button
                      variant="link"
                      className="px-0 text-[#9b87f5] hover:text-[#6E59A5] mt-2"
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
                <Card key={index} className="overflow-hidden hover-scale border-[#E5DEFF]">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#1A1F2C]">{category.name}</h3>
                    <p className="text-gray-600">{category.count} слов</p>
                    <Button
                      variant="link"
                      className="px-0 text-[#9b87f5] hover:text-[#6E59A5] mt-2"
                    >
                      Просмотреть
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="recent" className="animate-fade-in">
            <div className="text-center py-12">
              <p className="text-gray-600">Недавно добавленные слова появятся здесь</p>
            </div>
          </TabsContent>
        </Tabs>
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

export default Dictionary;

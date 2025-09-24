import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('generator');
  const [prompt, setPrompt] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Имитация генерации текста
    setTimeout(() => {
      const sampleTexts = [
        "🚀 Готовы к переменам? Сегодня мы поговорим о том, как технологии меняют нашу жизнь каждый день. От утренней чашки кофе до последнего взгляда в телефон перед сном - всё это часть цифрового мира!",
        "📈 Инвестиции в будущее начинаются с малого. Даже 100 рублей в месяц могут превратиться в серьёзную сумму через 10 лет. Главное - начать действовать уже сегодня!",
        "🎯 Успех - это не конечная точка, а процесс. Каждый день мы можем делать маленькие шаги к большой цели. Что вы сделаете сегодня для достижения своей мечты?"
      ];
      
      const randomText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
      setGeneratedText(randomText);
      setIsGenerating(false);
    }, 2000);
  };

  const templates = [
    {
      title: "Мотивационный пост",
      description: "Вдохновляющий контент для утренних публикаций",
      emoji: "💪",
      category: "Мотивация"
    },
    {
      title: "Образовательный контент", 
      description: "Полезные факты и советы для подписчиков",
      emoji: "📚",
      category: "Обучение"
    },
    {
      title: "Новостной дайджест",
      description: "Краткий обзор актуальных событий",
      emoji: "📰", 
      category: "Новости"
    },
    {
      title: "Развлекательный пост",
      description: "Лёгкий контент для поднятия настроения",
      emoji: "🎉",
      category: "Развлечения"
    },
    {
      title: "Вопрос аудитории",
      description: "Интерактивный пост для вовлечения",
      emoji: "❓",
      category: "Вовлечение"
    },
    {
      title: "Анонс события",
      description: "Привлекающий внимание анонс мероприятия",
      emoji: "📅",
      category: "События"
    }
  ];

  const pricingPlans = [
    {
      name: "Базовый",
      price: "Бесплатно",
      features: ["5 генераций в день", "Базовые шаблоны", "Стандартная поддержка"],
      popular: false
    },
    {
      name: "Про",
      price: "490₽/мес",
      features: ["100 генераций в день", "Все шаблоны", "Приоритетная поддержка", "API доступ"],
      popular: true
    },
    {
      name: "Бизнес",
      price: "1990₽/мес", 
      features: ["Безлимитные генерации", "Кастомные шаблоны", "Персональный менеджер", "Белый лейбл"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-pink-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Icon name="MessageCircle" size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-display font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                TeleGen
              </h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {['Генератор', 'Шаблоны', 'Тарифы'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item.toLowerCase())}
                  className={`font-medium transition-colors ${
                    activeTab === item.toLowerCase()
                      ? 'text-violet-600 border-b-2 border-violet-600'
                      : 'text-gray-600 hover:text-violet-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            <Button className="bg-gradient-to-r from-violet-600 to-pink-600 text-white hover:from-violet-700 hover:to-pink-700">
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Hero Section - только для главной */}
          {activeTab === 'generator' && (
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-5xl font-display font-bold mb-6 bg-gradient-to-r from-violet-600 via-pink-600 to-emerald-600 bg-clip-text text-transparent leading-tight">
                ИИ генератор текстов<br />для Telegram каналов
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Создавайте вирусный контент за секунды. Просто опишите, что хотите, и получите готовый пост для вашего канала.
              </p>
            </div>
          )}

          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-8 md:hidden">
            <TabsTrigger value="generator">
              <Icon name="Zap" size={16} className="mr-2" />
              Генератор
            </TabsTrigger>
            <TabsTrigger value="шаблоны">
              <Icon name="FileText" size={16} className="mr-2" />
              Шаблоны  
            </TabsTrigger>
            <TabsTrigger value="тарифы">
              <Icon name="CreditCard" size={16} className="mr-2" />
              Тарифы
            </TabsTrigger>
          </TabsList>

          {/* Generator Tab */}
          <TabsContent value="generator" className="space-y-8">
            <Card className="max-w-4xl mx-auto shadow-xl border-0 bg-white/80 backdrop-blur-sm animate-scale-in">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-display font-bold text-gray-800">
                  🚀 Создать пост для канала
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-700">
                    Опишите, какой пост хотите создать
                  </label>
                  <Textarea
                    placeholder="Например: мотивационный пост о достижении целей для утренней публикации..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="min-h-[120px] resize-none border-gray-200 focus:border-violet-500 focus:ring-violet-500"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="cursor-pointer hover:bg-violet-100" 
                    onClick={() => setPrompt("Мотивационный пост о достижении целей")}>
                    💪 Мотивация
                  </Badge>
                  <Badge variant="secondary" className="cursor-pointer hover:bg-pink-100"
                    onClick={() => setPrompt("Образовательный пост о финансах")}>
                    💰 Финансы
                  </Badge>
                  <Badge variant="secondary" className="cursor-pointer hover:bg-emerald-100"
                    onClick={() => setPrompt("Пост-вопрос для вовлечения аудитории")}>
                    ❓ Вопрос
                  </Badge>
                  <Badge variant="secondary" className="cursor-pointer hover:bg-orange-100"
                    onClick={() => setPrompt("Новостной пост о технологиях")}>
                    📱 Технологии
                  </Badge>
                </div>

                <Button 
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || isGenerating}
                  className="w-full bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 h-12 text-lg font-medium"
                >
                  {isGenerating ? (
                    <>
                      <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                      Генерируем...
                    </>
                  ) : (
                    <>
                      <Icon name="Sparkles" size={20} className="mr-2" />
                      Создать пост
                    </>
                  )}
                </Button>

                {generatedText && (
                  <div className="space-y-3 animate-slide-up">
                    <label className="text-sm font-medium text-gray-700">
                      Готовый пост для публикации
                    </label>
                    <div className="relative">
                      <Textarea
                        value={generatedText}
                        onChange={(e) => setGeneratedText(e.target.value)}
                        className="min-h-[150px] border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 bg-emerald-50"
                      />
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute top-2 right-2"
                        onClick={() => navigator.clipboard.writeText(generatedText)}
                      >
                        <Icon name="Copy" size={16} className="mr-1" />
                        Копировать
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Icon name="RefreshCw" size={16} className="mr-1" />
                        Перегенерировать
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="Download" size={16} className="mr-1" />
                        Сохранить
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Templates Tab */}
          <TabsContent value="шаблоны" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gray-800">
                Готовые шаблоны постов
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Выберите подходящий шаблон и адаптируйте его под свой канал
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer bg-white/80 backdrop-blur-sm animate-scale-in border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{template.emoji}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-800">{template.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {template.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                          {template.description}
                        </p>
                        <Button size="sm" variant="outline" className="w-full">
                          <Icon name="Play" size={14} className="mr-1" />
                          Использовать
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Pricing Tab */}
          <TabsContent value="тарифы" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gray-800">
                Выберите подходящий тариф
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Начните бесплатно или выберите план для профессионального использования
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`relative bg-white/80 backdrop-blur-sm animate-scale-in border-0 ${
                  plan.popular 
                    ? 'shadow-xl scale-105 border-2 border-violet-200' 
                    : 'shadow-lg hover:shadow-xl'
                } transition-all duration-300`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-violet-600 to-pink-600 text-white">
                        Популярный
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-display font-bold mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold mb-4 text-violet-600">{plan.price}</div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <Icon name="Check" size={16} className="mr-2 text-emerald-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${
                        plan.popular
                          ? 'bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white'
                          : 'border-violet-200 text-violet-600 hover:bg-violet-50'
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      {plan.price === 'Бесплатно' ? 'Начать бесплатно' : 'Выбрать план'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 TeleGen. Создано с помощью ИИ для вашего успеха.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
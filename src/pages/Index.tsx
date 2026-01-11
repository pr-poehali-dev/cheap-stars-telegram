import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface StarPackage {
  id: number;
  name: string;
  stars: number;
  price: number;
  discount?: number;
  popular?: boolean;
  description: string;
}

const starPackages: StarPackage[] = [
  { id: 1, name: 'Стартовый', stars: 50, price: 99, description: 'Идеально для начала' },
  { id: 2, name: 'Популярный', stars: 150, price: 249, discount: 20, popular: true, description: 'Лучшее соотношение цены' },
  { id: 3, name: 'Премиум', stars: 500, price: 749, discount: 25, description: 'Максимальная выгода' },
  { id: 4, name: 'Мини', stars: 25, price: 59, description: 'Попробуй звёзды' },
  { id: 5, name: 'Бизнес', stars: 1000, price: 1399, discount: 30, popular: true, description: 'Для профессионалов' },
  { id: 6, name: 'VIP', stars: 2500, price: 3299, discount: 35, description: 'Максимум звёзд' },
];

const reviews = [
  { id: 1, name: 'Алексей М.', rating: 5, text: 'Быстрая доставка, отличные цены! Рекомендую всем!', avatar: '👨‍💼' },
  { id: 2, name: 'Мария К.', rating: 5, text: 'Купила 500 звёзд, всё пришло моментально. Буду брать ещё!', avatar: '👩‍🎨' },
  { id: 3, name: 'Дмитрий С.', rating: 5, text: 'Самые низкие цены на рынке. Проверял!', avatar: '👨‍💻' },
];

export default function Index() {
  const [sortBy, setSortBy] = useState<'popular' | 'price' | 'stars'>('popular');

  const sortedPackages = [...starPackages].sort((a, b) => {
    if (sortBy === 'popular') return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'stars') return a.stars - b.stars;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-2xl animate-float">
              ⭐
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              StarShop
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#catalog" className="text-foreground/80 hover:text-foreground transition-colors">Каталог</a>
            <a href="#prices" className="text-foreground/80 hover:text-foreground transition-colors">Цены</a>
            <a href="#reviews" className="text-foreground/80 hover:text-foreground transition-colors">Отзывы</a>
          </nav>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
            <Icon name="ShoppingCart" size={20} className="mr-2" />
            Корзина
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-6">
          <Badge className="bg-gradient-to-r from-primary to-secondary text-lg px-4 py-2">
            🔥 Акция! Скидки до 35%
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
            Звёзды для Telegram по лучшим ценам
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Моментальная доставка • Безопасные платежи • Гарантия возврата
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6">
              <Icon name="Sparkles" size={24} className="mr-2" />
              Купить звёзды
            </Button>
            <Button size="lg" variant="outline" className="border-2 text-lg px-8 py-6">
              <Icon name="Info" size={24} className="mr-2" />
              Узнать больше
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { icon: '⚡', label: 'Моментально', value: '< 1 мин' },
            { icon: '💰', label: 'Сэкономлено', value: '2M₽' },
            { icon: '😊', label: 'Клиентов', value: '15K+' },
            { icon: '⭐', label: 'Рейтинг', value: '4.9/5' },
          ].map((stat, i) => (
            <Card key={i} className="bg-card/50 backdrop-blur border-border/50 hover:scale-105 transition-transform">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Каталог пакетов звёзд
          </h2>
          <p className="text-lg text-muted-foreground">Выбери идеальный пакет для себя</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Tabs value={sortBy} onValueChange={(v) => setSortBy(v as any)} className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-3 bg-card/50 backdrop-blur">
              <TabsTrigger value="popular" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary">
                <Icon name="TrendingUp" size={16} className="mr-2" />
                Популярные
              </TabsTrigger>
              <TabsTrigger value="price" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary">
                <Icon name="DollarSign" size={16} className="mr-2" />
                По цене
              </TabsTrigger>
              <TabsTrigger value="stars" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary">
                <Icon name="Star" size={16} className="mr-2" />
                По звёздам
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedPackages.map((pkg, index) => (
            <Card
              key={pkg.id}
              className={`bg-card/50 backdrop-blur border-2 hover:scale-105 hover:border-primary transition-all duration-300 animate-fade-in relative overflow-hidden ${
                pkg.popular ? 'border-primary shadow-lg shadow-primary/20' : 'border-border/50'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-secondary to-accent">
                    <Icon name="Flame" size={14} className="mr-1" />
                    ХИТ
                  </Badge>
                </div>
              )}
              {pkg.discount && (
                <div className="absolute top-4 left-4">
                  <Badge variant="destructive" className="bg-red-500">
                    -{pkg.discount}%
                  </Badge>
                </div>
              )}
              <CardHeader>
                <div className="text-5xl mb-4 text-center animate-float">⭐</div>
                <CardTitle className="text-2xl text-center">{pkg.name}</CardTitle>
                <CardDescription className="text-center">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {pkg.stars}
                  </div>
                  <div className="text-sm text-muted-foreground">звёзд</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">{pkg.price}₽</div>
                  {pkg.discount && (
                    <div className="text-sm text-muted-foreground line-through">
                      {Math.round(pkg.price / (1 - pkg.discount / 100))}₽
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                  <Icon name="ShoppingCart" size={18} className="mr-2" />
                  Купить сейчас
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="container mx-auto px-4 py-20 bg-card/30 backdrop-blur rounded-3xl my-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Прозрачные цены
          </h2>
          <p className="text-lg text-muted-foreground">Никаких скрытых платежей</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur border-2 border-primary/50">
            <CardContent className="p-8">
              <div className="space-y-4">
                {starPackages.map((pkg) => (
                  <div key={pkg.id} className="flex items-center justify-between p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">⭐</div>
                      <div>
                        <div className="font-semibold">{pkg.stars} звёзд</div>
                        <div className="text-sm text-muted-foreground">{pkg.name}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{pkg.price}₽</div>
                      {pkg.discount && (
                        <Badge variant="secondary" className="mt-1">-{pkg.discount}%</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Отзывы клиентов
          </h2>
          <p className="text-lg text-muted-foreground">Нам доверяют тысячи пользователей</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={review.id}
              className="bg-card/50 backdrop-blur border-border/50 hover:scale-105 hover:border-primary transition-all animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl">
                    {review.avatar}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1 mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-br from-primary via-secondary to-accent p-12 text-center border-0 animate-scale-in">
          <CardContent className="space-y-6">
            <div className="text-6xl">🚀</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Начни прямо сейчас!
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Купи звёзды для Telegram и получи бонусы при первой покупке
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              <Icon name="Zap" size={24} className="mr-2" />
              Купить со скидкой
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl">
                  ⭐
                </div>
                <span className="text-xl font-bold">StarShop</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Лучший магазин звёзд для Telegram
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Навигация</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#catalog" className="hover:text-foreground transition-colors">Каталог</a></li>
                <li><a href="#prices" className="hover:text-foreground transition-colors">Цены</a></li>
                <li><a href="#reviews" className="hover:text-foreground transition-colors">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Поддержка</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Гарантии</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Социальные сети</h3>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="rounded-full">
                  <Icon name="Send" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Icon name="MessageCircle" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Icon name="Mail" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 StarShop. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}

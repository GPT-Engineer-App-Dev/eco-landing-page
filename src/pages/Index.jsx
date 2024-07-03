import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <img src="/placeholder.svg" alt="Featured Product 1" className="w-full h-auto" />
            </CarouselItem>
            <CarouselItem>
              <img src="/placeholder.svg" alt="Featured Product 2" className="w-full h-auto" />
            </CarouselItem>
            <CarouselItem>
              <img src="/placeholder.svg" alt="Featured Product 3" className="w-full h-auto" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <h1 className="text-4xl font-bold">Welcome to Our Shop</h1>
        <p className="text-lg text-muted-foreground">Discover the best products at unbeatable prices.</p>
        <Button variant="primary">Shop Now</Button>
      </section>

      <Separator />

      {/* Featured Products */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((product) => (
            <Card key={product}>
              <CardHeader>
                <img src="/placeholder.svg" alt={`Product ${product}`} className="w-full h-auto" />
              </CardHeader>
              <CardContent>
                <CardTitle>Product {product}</CardTitle>
                <p className="text-muted-foreground">$99.99</p>
              </CardContent>
              <CardFooter>
                <Button variant="secondary">Buy Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Testimonials */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((testimonial) => (
            <Card key={testimonial}>
              <CardHeader className="flex items-center space-x-4">
                <Avatar>
                  <img src="/placeholder.svg" alt={`Customer ${testimonial}`} className="w-full h-auto" />
                </Avatar>
                <div>
                  <CardTitle>Customer {testimonial}</CardTitle>
                  <p className="text-muted-foreground">"This is the best product I've ever bought!"</p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Newsletter Signup */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Stay Updated</h2>
        <p className="text-lg text-muted-foreground">Sign up for our newsletter to get the latest news and offers.</p>
        <div className="flex justify-center space-x-2">
          <Input type="email" placeholder="Enter your email" className="w-1/2" />
          <Button variant="primary">Subscribe</Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
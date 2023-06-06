# Proje Adı: app

Bu proje, özgür Yazılım A.Ş. staj başvurumun değerlendirilmesi için geliştirdiğim bir laboratuvar raporlama uygulamasıdır. Proje, Spring, JPA, Maven ve React teknolojilerini kullanmaktadır.

## Proje Tanımı

Bu uygulama, laboratuvar raporlarını yönetmek için kullanılan basit bir web sitesi sağlar. Aşağıda proje özellikleri ve kullanım talimatları bulunmaktadır.

### Özellikler

- Rapor Tanımı: Dosya numarası, Hasta Ad ve Soyad, Hasta Kimlik Numarası (TC), Koyulan Tanı Başlığı, Tanı Detayları, Raporun Verildiği Tarih, Fiziksel Rapora Ait .png/.jpg Formatında Bir Adet Fotoğraf
- Laborant Tanımı: Ad, Soyad, Hastane Kimlik Numarası (7 Haneli) gibi bilgiler içerir.
- Arama ve Sıralama: Hasta adı/soyadı, Hasta kimlik numarası, Laborant adı/soyadı bilgileri ile arama yapılabilir. Rapor tarihine göre sıralama yapılabilir.
- Rapor İşlemleri: Var olan bir rapor üzerinde değişiklik yapılabilir, tüm raporların detayları incelenebilir ve var olan bir rapor silinebilir.

### Kurulum ve Çalıştırma

1. Projeyi bilgisayarınıza klonlayın:

frontend: https://github.com/bilimerdi/app.git
backend: https://github.com/bilimerdi/app_backend.git

2.Projeyi çalıştırmak için gerekli programları indirin:

Bu projeyi çalıştırmak için Node.js, Java ve Maven indirilmesi gerekmektedir.

Node.js: React uygulamasını çalıştırmak için Node.js'in bilgisayarınıza yüklenmesi gerekmektedir. Node.js, JavaScript çalıştırma ortamı sağlar ve projenin bağımlılıklarını yönetmek için npm (Node Package Manager) kullanır. Node.js'i indirmek için aşağıdaki siteyi kullanabilirsiniz:

-Node.js'in resmi web sitesine gidin: https://nodejs.org/
-İndirme sayfasından uygun sürümü seçin (Önerilen LTS sürümüdür).

Maven: Spring Boot projenizi çalıştırmak ve bağımlılıkları yönetmek için Maven'i kullanıyoruz. Maven, Java projelerinin yapılandırma, derleme ve paketlenme işlemlerini kolaylaştıran bir araçtır. Maven'i indirmek ve kurmak için aşağıdaki adımları izleyebilirsiniz:

-Maven'in resmi web sitesine gidin: https://maven.apache.org/
-İndirme sayfasından en son stabil sürümü seçin ve indirin.
-İndirilen dosyayı açın ve içindeki dosyaları bir dizine çıkarın.
-MAVEN_HOME olarak adlandırılan bir sistem değişkeni oluşturun ve Maven'in dizinini belirtin.
-Ayrıca PATH sistem değişkenine de Maven'in bin dizinini ekleyin.

Spring Boot projeleri Java programlama diliyle geliştirilir ve çalıştırılır. Java, uygulamaların platform bağımsız olarak çalışmasını sağlayan bir programlama dilidir.
Java'yı indirmek ve kurmak için aşağıdaki adımları izleyebilirsiniz:

-Oracle JDK veya OpenJDK'yi indirin: Java Development Kit (JDK), Java uygulamalarının geliştirilmesi ve çalıştırılması için gereklidir. JDK'nın resmi dağıtımları Oracle JDK ve OpenJDK'dir. İkisinden herhangi birini seçebilirsiniz.
-Oracle JDK: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html
-OpenJDK: https://adoptopenjdk.net/

3. Frontend klasörüne gidin ve gerekli bağımlılıkları yüklemek için aşağıdaki komutu çalıştırın:

cd app /
npm install /
npm start


4. Backend klasörüne gidin ve projeyi çalıştırmak için aşağıdaki komutu çalıştırın:

cd app_backend /
mvn spring-boot:run


5. Uygulama başarıyla çalıştırıldıktan sonra, web tarayıcınızdan `http://localhost:3000` adresine gidin ve uygulamayı kullanmaya başlayın.

## Teknik Seçimler ve Gerekçeleri

- React: Kullanıcı dostu bir kullanıcı arayüzü oluşturmak için React'i tercih ettim. React, bileşen tabanlı bir yaklaşım sunar ve verimli bir şekilde güncellemeler yapmayı sağlar.
- Spring ve JPA: Java tabanlı backend geliştirmek için Spring ve JPA'yı seçtim. Spring, büyük bir geliştirici topluluğuna ve zengin bir ekosisteme sahiptir ve JPA, veritabanı işlemlerini kolaylaştırır.
- Maven: Bağımlılıkları yönetmek ve proje yapılandırmasını kolaylaştırmak için Maven'i tercih ettim. Maven, projenin düzenli bir şekilde derlenmesi ve çalıştırılması için gereken tüm bağımlılıkları otomatik olarak yönetir.

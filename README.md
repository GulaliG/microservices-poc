#  Mikro Hizmet PoC (Proof of Concept)

Bu proje, **Express.js ve mikro hizmet mimarisi** kullanarak yaptığım bir **PoC (Proof of Concept)** çalışmasıdır.  
Amaç, **farklı servisleri yönetmek ve API Gateway kullanarak tek bir giriş noktası oluşturmak**.  

**Bu proje içinde 3 farklı servis var**:
- *User Service* → Kullanıcı listesini döndürür.
- *Payment Service* → Ödeme işlemlerini yönetir.
- *Notification Service* → Kullanıcılara bildirim gönderir.
- *API Gateway* → Tüm servisleri tek bir noktadan yönetir.

**Nasıl Çalıştırılır?**
Her servisi başlat (her biri ayrı terminalde çalıştırılmalı)
cd user-service && node server.js
cd ../payment-service && node server.js
cd ../notification-service && node server.js
cd ../api-gateway && node server.js

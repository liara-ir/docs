import Layout from "../../../components/Layout";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>
        توضیحات و نکات تکمیلی در برنامه‌های Angular - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/angularjs.svg"
        alt="angular"
      />
      <div className="page-title">
        <h1>برنامه‌های Angular</h1>
        <span className="page-description">(Angular Apps)</span>
      </div>
    </div>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>

    <h3>تنظیمات Nginx</h3>
    <p>
      استقرار برنامه‌های Angular توسط وب‌سرور
      <span className="code">Nginx</span>
      انجام می‌گیرد. در شرایط مختلف، ممکن است که نیاز داشته باشید این وب‌سرور را
      مطابق با نیازهای‌تان تنظیم کنید. برای این کار، کافیست که در ریشه‌ی
      برنامه‌ی‌تان، فایلی با نام
      <span className="code">liara_nginx.conf</span>
      ایجاد کنید. به‌صورت پیش‌فرض، برای برنامه‌های Angular این فایل به شکل زیر
      تعریف شده‌است:
    </p>
    <pre>
      <code>
        {`location / {
  index index.html index.htm;
  try_files $uri $uri/ /index.html =404;
}`}
      </code>
    </pre>
    <p>که شما می‌توانید آن را به شیوه‌ی خودتان گسترش دهید:</p>
    <pre>
      <code>
        {`location / {
  # ...
}
location /api {
  # ...
}
location /images {
  # ...
}`}
      </code>
    </pre>

    <h3>فعال‌سازی gzip و Browser Caching</h3>
    <p>
      برای کاهش اندازه‌ی صفحات وب، فعال‌سازی فشرده‌ساز gzip
      و همین‌طور Browser Caching
      بسیار توصیه می‌شود. برای این‌کار، کافیست که فایلی به‌نام
      <span className="code">liara_nginx.conf</span>
      در ریشه‌ی برنامه‌ی‌تان، در کنار <span className="code">package.json</span>،
      بسازید و بعد دستور<span className="code">liara deploy</span>
      را وارد کنید.
    </p>
    <pre>
      <code>
        {`gzip             on;
gzip_disable     "msie6";
gzip_vary        on;
gzip_proxied     any;
gzip_comp_level  6;
gzip_types       text/plain text/css application/json application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;

location / {
  index index.html index.htm;
  try_files $uri $uri/ /index.html =404;
}

# cache.appcache, your document html and data
location ~* \.(?:manifest|appcache|html?|xml|json)$ {
  expires -1;
}

# Media: images, icons, video, audio, HTC
location ~* \.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm|htc)$ {
  expires 1M;
  access_log off;
  add_header Cache-Control "public";
}

# CSS, Javascript and Fonts
location ~* \.(?:css|js|otf|ttf|eot|woff|woff2)$ {
  expires 1y;
  access_log off;
  add_header Cache-Control "public";
}`}
      </code>
    </pre>
  </Layout>
);

import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات اتصال به دیتابیس‌های ابری</title>
    </Head>

    <h1>اتصال امن به دیتابیس‌ها</h1>
    <span className="pageDescription">(Secure SSH Tunnel to Databases)</span>

    <p>
      زمانی که دیتابیسی را در پنل کاربری لیارا تهیه می‌کنید، اطلاعات اتصال
      {' '}
      <b>«مستقیم»</b>
      {' '}
      به دیتابیس
      به شما نمایش داده می‌شود که با استفاده از این اطلاعات می‌توانید پروژه‌ی‌تان را به دیتابیس وصل کنید.
      <br />
      اما زمانی که قصد دارید از لوکال و در واقع کامپیوتر خودتان به دیتابیس وصل شده تا داده‌های‌تان
      را مشاهده کرده و کوئری‌هایی را اجرا کنید، لازم است که از روش امن‌تری برای اتصال به دیتابیس استفاده کنید.
    </p>
    <p>
      برای این کار می‌توانید از یک تونل SSH استفاده کنید.
      در واقع، با این تونل، پورت دیتابیس به یک پورت مشخص در کامپیوترتان وصل می‌شود
      و حالا شما با اتصال به این پورت مشخص در لوکال‌هاست، به دیتابیس اصلی متصل می‌شوید.
      Liara CLI
      همه‌ی کارهای لازم را به صورت خودکار برای‌تان انجام می‌دهد. بنابراین، شما هر زمان که
      قصد اتصال به دیتابیسی را از کامپیوتر خودتان داشتید، فقط لازم است که اقدامات زیر را انجام دهید.
    </p>
    
    <h3>ایجاد یک تونل امن</h3>
    <p>
    در ابتدا مطمئن شوید که
      <span className="code">@liara/cli</span>
      را روی کامپیوترتان نصب کرده‌اید.
      {' '}
      <Link href="/clients/cli" title="مستندات CLI">اطلاعات بیشتر</Link>
    </p>
    <p>
      و حالا با اجرای دستور زیر، لیست دیتابیس‌های فعال شما نمایش داده می‌شود که بر حسب تاریخ ساخت،
      مرتب شده‌اند. با انتخاب دیتابیس مورد نظر، تونل روی لوکال‌هاست و یک پورتی تصادفی ایجاد می‌شود.
    </p>
    <pre>
      <code>
        {`liara tunnel:open`}
      </code>
    </pre>
    <p>
      توجه داشته باشید که این دستور را به هر تعداد که نیاز داشته باشید می‌توانید اجرا کنید و هر بار برای آن دیتابیس، پورت جدیدی دریافت خواهید کرد.
      برای مثال، اگر یک دیتابیس MySQL و همین‌طور یک دیتابیس Redis
      دارید، می‌توانید این دستور را ۲ بار اجرا کرده تا ۲ تونل ایجاد شود.
    </p>

    <p>در ویدیوی زیر، می‌توانید راهنمای عملی این قابلیت را مشاهده کنید:</p>
    <a href="https://asciinema.org/a/296170" target="_blank">
      <img src="https://asciinema.org/a/296170.svg" />
    </a>

    <h3>بستن تونل‌ها</h3>
    <p>
      بعد از اتمام کارتان، با اجرای دستور زیر، می‌توانید تمام تونل‌های باز را ببندید:
    </p>
    <pre>
      <code>
        {`liara tunnel:close`}
      </code>
    </pre>
  </Layout>
)
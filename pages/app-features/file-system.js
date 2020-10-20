import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

export default () => (
  <Layout>
    <Head>
      <title>مستندات فایل‌ سیستم - سرویس ابری لیارا</title>
    </Head>

    <h1>فایل ‌سیستم</h1>
    <span className="page-description">(File System)</span>

    <p>
      فایل سیستم برنامه‌های لیارا Read-Only یا فقط خواندنی است، به عبارتی بعد از
      استقرار برنامه‌تان تنها می‌توانید فایل‌ها و دایرکتوری‌ها را مشاهده کنید و
      امکان ایجاد هیچ گونه تغییری در آن‌‌ها وجود ندارد.
    </p>

    <p>
      این موضوع باعث افزایش امنیت و اطمینان برنامه‌تان می‌شود. چرا که اگر
      نفوذگری قصد ایجاد تغییری ویران‌گر در فایل‌های پروژه‌تان را داشته باشد، با
      شکست روبرو می‌شود.
    </p>

    <p>
      پیش‌تر کاربران لیارا می‌توانستند از طریق خط فرمان، به برنامه‌شان متصل شوند
      و تغییرات مورد نیاز و یا فایل‌های مد نظرشان را ایجاد کنند. اما این نکته
      همیشه وجود داشت که این تغییرات لایو، موقتی هستند و بعد از یک ری‌استارت یا
      استقرار جدید، از بین خواهند رفت.
    </p>

    <p>
      بهترین روش برای ایجاد چنین تغییراتی، این است که این تغییرات در لوکال انجام
      و سپس در لیارا مستقر شوند. با توجه به این که لیارا تنها تغییرات جدید را
      منتقل می‌کند، پس جای نگرانی برای زمان‌بر بودن استقرار مجدد وجود ندارد.
    </p>

    <p>
      با وجود Read-Only بودن فایل سیستم برنامه‌های لیارا، دایرکتوری
      <span className="code">/tmp</span> از این قاعده مستثنی است. می‌توانید از
      این دایرکتوری که در همه پلن‌های ارائه شده، حجمی برابر 100 مگابایت دارد،
      برای ذخیره سازی لاگ‌ها، فایل‌ها آپلودی موقتی و غیره استفاده کنید.
    </p>

    <p>
      اما اگر این دایرکتوری پاسخ‌گوی نیاز شما نبود، چاره کار استفاده از دیسک‌ها
      در برنامه‌تان می‌باشد. به طور مثال قصد ذخیره فایل‌های کاربران را دارید و
      نمی‌خواهید به هیچ وجه این فایل‌ها را حذف کنید. در این شرایط به قسمت
      دیسک‌ها در برنامه‌تان مراجعه کنید و اقدام به ایجاد دیسک کنید.
      <br />
      <Link href="/storage/disks/about">
        <a>اطلاعات بیشتر درباره‌ی دیسک‌ها</a>
      </Link>
    </p>
  </Layout>
);
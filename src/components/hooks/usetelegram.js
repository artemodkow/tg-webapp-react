const tg = window.Telegram.WebApp;

export  function usetelegram() {

    return{
        tg,
        user: tg.initDataUnsafe?.user,
        avatar: tg.initData.user?.photo_url,
    }
}
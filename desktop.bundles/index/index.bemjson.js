({
    block: 'page',
    title: 'Мурдалайское логово',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index.ie.css', ie: 'gte IE 6' },
        { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    content:[
        {
            block: 'header',
            content: [
            
            { 
                block: 'logo',
                url: 'http://murdalay.com/img/logo.png' 
            },

            {
                block: 'title',
                content: 'Мурдалайское логово'
            }

            ]
        },
        {
            block: 'content',
            content: [
             { 
                block: 'left',
                content: [

                { 
                block: 'paragraph',
                content: "Вы зашли на личную страничку Сергея Иваниченко. На данный момент ресурс на стадии разработки и тестирования. <p>Часть сервисов будет доступна только по частным приглашениям и для личных нужд владельца. </p><br>Не взыщите ;) " 
                }

                ]
            },
                    {
            block: 'divider'
            },
            { 
                block: 'right',
                    content: [        
                    {
                        block: 'menu',
                        content:[
                         { elem: 'item', url: 'http://torrent.murdalay.com', caption: 'Торрент' },
                         { elem: 'item', url: 'http://webmin.murdalay.com', caption: 'Webmin вход на сервер' },
                         { elem: 'item', url: 'http://github.com/murdalay', caption: 'Гитхабик' },
                         { elem: 'item', url: 'https://mail.yandex.ru', caption: 'Вход в почту для @murdalay.com' }
                        ]
                    }
                    ]
            }

            ]
        },
        {
            block: 'footer',
            content: [
                'Mail me to murdalay@gmail.com'
            ]
        },
        {
            block: 'extfonts'
        },
        { elem: 'js', url: '_index.js' }
    ]
})

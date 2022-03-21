import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = 
        [
            {
                "source": {
                    "id": "independent",
                    "name": "Independent"
                },
                "author": "Harry Latham-Coyle",
                "title": "France vs England LIVE: Six Nations rugby updates and latest news from title decider at Stade de France",
                "description": "Six Nations 2022: Follow live as France go for a Grand Slam and a first title since 2010 in Paris",
                "url": "http://www.independent.co.uk/sport/rugby/rugby-union/france-england-live-stream-six-nations-2022-b2039553.html",
                "urlToImage": "https://static.independent.co.uk/2022/03/19/19/SEI94405733.jpg?quality=75&width=1200&auto=webp",
                "publishedAt": "2022-03-19T19:21:17Z",
                "content": "Team News England\r\nMaking more radical alterations is Eddie Jones. It must be said that England have suffered some real injury misfortune during this tournament, with Tom Curry the latest to drop out… [+1666 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Sarah Perez",
                "title": "This Week in Apps: Instagram's parental controls, Tile's anti-stalking update, iOS 15.4 arrives",
                "description": "Welcome back to This Week in Apps, the weekly TechCrunch series that recaps the latest in mobile OS news, mobile applications and the overall app economy. The app industry continues to grow, with a record number of downloads and consumer spending across both …",
                "url": "https://techcrunch.com/2022/03/19/this-week-in-apps-instagrams-parental-controls-tiles-anti-stalking-update-ios-15-4-arrives/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/11/this-week-in-apps-splash-2021.png?w=753",
                "publishedAt": "2022-03-19T17:55:51Z",
                "content": "Welcome back to This Week in Apps, the weekly TechCrunch series that recaps the latest in mobile OS news, mobile applications and the overall app economy.\r\nThe app industry continues to grow, with a … [+19035 chars]"
            },
            {
                "source": {
                    "id": "nhl-news",
                    "name": "NHL News"
                },
                "author": "NHL.com",
                "title": "NHL Buzz: Matthews back for Maple Leafs after suspension",
                "description": "Welcome to the NHL Buzz. Throughout the 2021-22 season, NHL.com will have you covered with the latest news.",
                "url": "https://www.nhl.com/news/nhl-buzz-news-and-notes-march-19/c-332006654",
                "urlToImage": "https://cms.nhl.bamgrid.com/images/photos/332006780/1024x576/cut.jpg",
                "publishedAt": "2022-03-19T17:14:11Z",
                "content": "Welcome to the NHL Buzz. Throughout the 2021-22 season, NHL.com will have you covered with the latest news. \r\nToronto Maple Leafs\r\nAuston Matthews will return from a suspension for the Toronto Maple … [+2349 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "Yelena Dzhanova",
                "title": "Loser.com is now redirecting site visitors to Putin's Wikipedia page",
                "description": "Putin is the latest subject of Loser.com owner Brian Connelly, who has used the site in recent years to troll and shame politicians and celebrities.",
                "url": "http://www.businessinsider.com/losercom-website-redirecting-visitors-russian-president-vladimir-putin-wikipedia-2022-3",
                "urlToImage": "https://i.insider.com/6235e2fc927f4a001886ae43?width=1200&format=jpeg",
                "publishedAt": "2022-03-19T14:57:40Z",
                "content": "Visitors to Loser.com are now being redirected to the Wikipedia page for Russian President Vladimir Putin.\r\nPutin is the latest target of Loser.com owner Brian Connelly, who has used the site in rece… [+1725 chars]"
            },
            {
                "source": {
                    "id": "business-insider-uk",
                    "name": "Business Insider (UK)"
                },
                "author": "Yelena Dzhanova",
                "title": "Loser.com is now redirecting site visitors to Putin's Wikipedia page",
                "description": "Putin is the latest subject of Loser.com owner Brian Connelly, who has used the site in recent years to troll and shame politicians and celebrities.",
                "url": "http://uk.businessinsider.com/losercom-website-redirecting-visitors-russian-president-vladimir-putin-wikipedia-2022-3",
                "urlToImage": "https://i.insider.com/6235e2fc927f4a001886ae43?width=1200&format=jpeg",
                "publishedAt": "2022-03-19T14:57:40Z",
                "content": "Visitors to Loser.com are now being redirected to the Wikipedia page for Russian President Vladimir Putin.\r\nPutin is the latest target of Loser.com owner Brian Connelly, who has used the site in rece… [+1725 chars]"
            },
            {
                "source": {
                    "id": "google-news-in",
                    "name": "Google News (India)"
                },
                "author": "hindustantimes.com",
                "title": "PM Modi-Kishida discuss Ukraine conflict, stability in Indo-Pacific region",
                "description": "Prime Minister Narendra Modi and his Japanese counterpart Fumio Kishida agreed on joint efforts to ensure peace in the Indo-Pacific region | Latest News India",
                "url": "https://www.hindustantimes.com/india-news/need-a-peaceful-solution-to-ukraine-conflict-pm-modi-japan-pm-kishida-101647699264379.html",
                "urlToImage": "https://images.hindustantimes.com/img/2022/03/19/1600x900/PM_Modi_and_Fumio_Kishida_1647711846504_1647711846684.jpeg",
                "publishedAt": "2022-03-19T14:44:03+00:00",
                "content": "Prime Minister Narendra Modi and his Japanese counterpart Fumio Kishida held talks on several key issues ranging from Ukraine conflict, the situation in Indo-Pacific and measures to strengthen the ec… [+1250 chars]"
            },
            {
                "source": {
                    "id": "the-wall-street-journal",
                    "name": "The Wall Street Journal"
                },
                "author": "Liz Hoffman, Melissa Korn",
                "title": "Carson Block’s Latest Short Target Is a Columbia Law Professor",
                "description": "The investor is trying to discredit a legal expert whose research is helping guide a federal investigation of Block and other short sellers",
                "url": "https://www.wsj.com/articles/carson-blocks-latest-short-target-is-a-columbia-law-professor-11647658318?mod=hp_lead_pos3",
                "urlToImage": "https://images.wsj.net/im-505936/social",
                "publishedAt": "2022-03-19T14:00:00Z",
                "content": "A federal criminal investigation into short sellers has spawned a behind-the-scenes feud between a law professor whose research is helping to guide prosecutors and one of the most prominent investors… [+341 chars]"
            },
            {
                "source": {
                    "id": "nhl-news",
                    "name": "NHL News"
                },
                "author": "NHL.com",
                "title": "NHL Trade Buzz: Toews contemplating future after Blackhawks deal Hagel",
                "description": "Welcome to the NHL Trade Buzz. The 2022 NHL Trade Deadline on March 21 (3 p.m. ET) is two days away.Here's a look around the League at the latest deadline doings:",
                "url": "https://www.nhl.com/news/nhl-trade-buzz-news-and-notes-march-19/c-332003676",
                "urlToImage": "https://cms.nhl.bamgrid.com/images/photos/332003678/1024x576/cut.jpg",
                "publishedAt": "2022-03-19T13:53:00Z",
                "content": "Chicago Blackhawks\r\nJonathan Toews is reportedly contemplating his future after the rebuilding Blackhawks traded forward Brandon Hagel to the Tampa Bay Lightning on Friday.\r\n\"Yeah, if 'Hags' is the g… [+6763 chars]"
            },
            {
                "source": {
                    "id": "abc-news-au",
                    "name": "ABC News (AU)"
                },
                "author": "ABC News",
                "title": "COVID-19 updates: Every state and territory's coronavirus numbers in one place",
                "description": "Looking for your state or territory's latest COVID-19 statistics? Here's where to find them.",
                "url": "http://www.abc.net.au/news/2022-03-19/australian-state-and-territory-coronavirus-numbers-march-19/100923512",
                "urlToImage": "https://live-production.wcms.abc-cdn.net.au/68d1b760f4efdde465afdf426fb7e06e?impolicy=wcms_crop_resize&cropH=1535&cropW=2735&xPos=265&yPos=282&width=862&height=485",
                "publishedAt": "2022-03-18T22:33:34Z",
                "content": "Here's a quick wrap of what's happening with COVID-19 figures across Australia today, Saturday, March 19.\r\nYou can get a more detailed, visual breakdown through the ABC's Charting the Spread story ri… [+703 chars]"
            },
            {
                "source": {
                    "id": "engadget",
                    "name": "Engadget"
                },
                "author": "https://www.engadget.com/about/editors/valentina-palladino",
                "title": "Apple's latest iPad mini is $40 off at Amazon | Engadget",
                "description": "Amazon knocks $40 off Apple's latest iPad mini, bringing the base model down to $459..",
                "url": "https://www.engadget.com/apples-latest-ipad-mini-is-40-off-at-amazon-123804288.html",
                "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-09/70335340-1ad9-11ec-bbd6-16a028aa88b2",
                "publishedAt": "2022-03-18T16:52:18.1554242Z",
                "content": "Apple's updated iPad mini may be a niche device because of its size, but it's got enough power to suit most people's needs. We gave the small tablet a score of 89 when it came out last year, and now … [+1459 chars]"
            },
            {
                "source": {
                    "id": "nhl-news",
                    "name": "NHL News"
                },
                "author": "Nicholas J. Cotsonika",
                "title": "Eichel doubtful to play for Golden Knights on Saturday",
                "description": "Jack Eichel is the latest worry for the Vegas Golden Knights, who have been plagued by injuries this season and are in danger of missing the Stanley Cup Playoffs for the first time since they joined the NHL as an expansion team in 2017-18.",
                "url": "https://www.nhl.com/news/jack-eichel-injury-latest-concern-as-vegas-tries-to-make-postseason/c-331973626",
                "urlToImage": "https://cms.nhl.bamgrid.com/images/photos/331973782/1024x576/cut.jpg",
                "publishedAt": "2022-03-18T16:21:19Z",
                "content": "Jack Eichel is the latest worry for the Vegas Golden Knights, who have been plagued by injuries this season and are in danger of missing the Stanley Cup Playoffs for the first time since they joined … [+4270 chars]"
            },
            {
                "source": {
                    "id": "wired",
                    "name": "Wired"
                },
                "author": "Wired",
                "title": "The Amazon Warehouse Walkout Is Just the Latest Push",
                "description": "Amazonians United has coordinated its first multistate walkout for better pay after racking up wins across the nation for the past three years.",
                "url": "https://www.wired.com/story/amazonians-unite-walkouts",
                "urlToImage": "https://media.wired.com/photos/62334d702c80bae389480b51/191:100/w_1280,c_limit/Amazon_signs_walkout_Biz_GettyImages-1231977803.jpg",
                "publishedAt": "2022-03-17T18:06:40Z",
                "content": "In the predawn hours of Wednesday morning, workers at three Amazon warehouses walked off the job. More than 60 employees at two delivery stations in Queens, New York and one in the Maryland suburbs o… [+3019 chars]"
            },
            {
                "source": {
                    "id": "ign",
                    "name": "IGN"
                },
                "author": null,
                "title": "Destiny 2: The Witch Queen Video Review - IGN",
                "description": "Destiny 2: The Witch Queen expansion reviewed by Travis Northup on PC and Xbox, also available on PlayStation and Stadia.\r\n\r\nBungie's latest expansion to its long-running looter shooter may still neglect its PvP modes, but a great story and an exciting campai…",
                "url": "https://www.ign.com/videos/destiny-2-the-witch-queen-video-review",
                "urlToImage": "https://assets1.ignimgs.com/thumbs/userUploaded/2022/3/9/destiny2thewitchqueenvideoreview36190303destiny2thewitchqueenreviewyt-1646852997769.jpg?width=1280",
                "publishedAt": "2022-03-16T16:37:21.7524022Z",
                "content": "Did you enjoy this video?"
            },
            {
                "source": {
                    "id": "usa-today",
                    "name": "USA Today"
                },
                "author": null,
                "title": "Ukraine-Russia crisis",
                "description": "The latest news as Russian president Vladimir Putin could soon decide to escalate the crisis at the Ukraine-Russia border and invade Ukraine.",
                "url": "https://www.usatoday.com/news/ukraine/",
                "urlToImage": null,
                "publishedAt": "2022-02-24T11:34:22+00:00",
                "content": "The latest news as Russian president Vladimir Putin could soon decide to escalate the crisis at the Ukraine-Russia border and invade Ukraine."
            },
            {
                "source": {
                    "id": "financial-post",
                    "name": "Financial Post"
                },
                "author": "Financial Post",
                "title": "Financial Post",
                "description": "Stay up-to-date with the latest business trends and information on the Canadian economy, stock market and personal finance. Learn to save money, invest in the market, grow your wealth and advance your career with new skills.",
                "url": "http://business.financialpost.com/category/personal-finance/business-essentials/",
                "urlToImage": "https://storage.googleapis.com/pmd-stage-northamerica-northeast1-dcs-static-files/9.4.3/websites/images/postmedia-image-fallback.png",
                "publishedAt": "2022-02-20T02:07:24.1844434Z",
                "content": "365 Bloor Street East, Toronto, Ontario, M4W 3L4\r\n © 2022 Financial Post, a division of Postmedia Network Inc. All rights reserved. Unauthorized distribution, transmission or republication strictly p… [+9 chars]"
            },
            {
                "source": {
                    "id": "financial-post",
                    "name": "Financial Post"
                },
                "author": "Financial Post",
                "title": "Financial Post",
                "description": "Read latest breaking news, updates, and headlines. Financial Post offers information on latest national and international events & more.",
                "url": "http://business.financialpost.com/category/fp-work/",
                "urlToImage": "https://storage.googleapis.com/pmd-stage-northamerica-northeast1-dcs-static-files/9.4.3/websites/images/postmedia-image-fallback.png",
                "publishedAt": "2022-02-20T02:07:21.4507484Z",
                "content": "365 Bloor Street East, Toronto, Ontario, M4W 3L4\r\n © 2022 Financial Post, a division of Postmedia Network Inc. All rights reserved. Unauthorized distribution, transmission or republication strictly p… [+9 chars]"
            },
            {
                "source": {
                    "id": "financial-post",
                    "name": "Financial Post"
                },
                "author": "Financial Post",
                "title": "Financial Post",
                "description": "Latest news on the economic system, inflation, gross domestic product (GDP), national debts and financial news, as well as coverage for health care, the sector plus more.",
                "url": "http://business.financialpost.com/category/news/economy/",
                "urlToImage": "https://storage.googleapis.com/pmd-stage-northamerica-northeast1-dcs-static-files/9.4.3/websites/images/postmedia-image-fallback.png",
                "publishedAt": "2022-02-20T02:07:18.4967476Z",
                "content": "365 Bloor Street East, Toronto, Ontario, M4W 3L4\r\n © 2022 Financial Post, a division of Postmedia Network Inc. All rights reserved. Unauthorized distribution, transmission or republication strictly p… [+9 chars]"
            },
            {
                "source": {
                    "id": "financial-post",
                    "name": "Financial Post"
                },
                "author": "Financial Post",
                "title": "Financial Post",
                "description": "Read latest breaking news, updates, and headlines. Financial Post offers information on latest national and international events & more.",
                "url": "http://business.financialpost.com/category/fp-finance/",
                "urlToImage": "https://storage.googleapis.com/pmd-stage-northamerica-northeast1-dcs-static-files/9.4.3/websites/images/postmedia-image-fallback.png",
                "publishedAt": "2022-02-20T00:52:25.6697201Z",
                "content": "365 Bloor Street East, Toronto, Ontario, M4W 3L4\r\n © 2022 Financial Post, a division of Postmedia Network Inc. All rights reserved. Unauthorized distribution, transmission or republication strictly p… [+9 chars]"
            },
            {
                "source": {
                    "id": "financial-post",
                    "name": "Financial Post"
                },
                "author": "Financial Post",
                "title": "Financial Post",
                "description": "Stay up-to-date with the latest business trends and information on the Canadian economy, stock market and personal finance. Learn to save money, invest in the market, grow your wealth and advance your career with new skills.",
                "url": "https://financialpost.com/category/personal-finance/business-essentials/",
                "urlToImage": "https://storage.googleapis.com/pmd-stage-northamerica-northeast1-dcs-static-files/9.4.3/websites/images/postmedia-image-fallback.png",
                "publishedAt": "2022-02-20T00:52:24.7949372Z",
                "content": "365 Bloor Street East, Toronto, Ontario, M4W 3L4\r\n © 2022 Financial Post, a division of Postmedia Network Inc. All rights reserved. Unauthorized distribution, transmission or republication strictly p… [+9 chars]"
            },
            {
                "source": {
                    "id": "financial-post",
                    "name": "Financial Post"
                },
                "author": "Financial Post",
                "title": "Financial Post",
                "description": "Read the most recent news, updates, reports, and analysis on Energy in Canada. Get exclusive information on the latest happenings and events in the energy sector.",
                "url": "http://business.financialpost.com/category/commodities/energy/",
                "urlToImage": "https://storage.googleapis.com/pmd-stage-northamerica-northeast1-dcs-static-files/9.4.3/websites/images/postmedia-image-fallback.png",
                "publishedAt": "2022-02-20T00:52:22.6704662Z",
                "content": "365 Bloor Street East, Toronto, Ontario, M4W 3L4\r\n © 2022 Financial Post, a division of Postmedia Network Inc. All rights reserved. Unauthorized distribution, transmission or republication strictly p… [+9 chars]"
            }
        ]

    constructor()
    {
        super(); // We need to call super class in order to run the constructor properly.
        console.log('Hello, I am from News Component');
        this.state = {
           articles: this.articles,
           loading: false
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h2>Headlines</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <NewsItem title="myTitle" description="myDescription" imgUrl="https://static.independent.co.uk/2022/03/19/19/SEI94405733.jpg?quality=75&width=1200&auto=webp" />
                        </div>
                        <div className="col-md-4">
                            <NewsItem title="myTitle" description="myDescription" />
                        </div>
                        <div className="col-md-4">
                            <NewsItem title="myTitle" description="myDescription" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
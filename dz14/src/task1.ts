if (confirm('Почати тестування?')) {

    type Sponsors = {
        sponsorFirstName: string,
        sponsorLastName: string,
        investmentAmount: number,
    }
    type Website = {
        companyName: string,
        owner: string,
        sponsors: Sponsors[],
        yearOfRelease: number,
        siteCost: number,
        profit?: number
    }

    const websites: Website[] = [
        {
            companyName: 'Kinogo',
            owner: 'Dwayne Johnson',
            sponsors: [
                {
                    sponsorFirstName: 'John',
                    sponsorLastName: 'Cena',
                    investmentAmount: 10000,
                },
                {
                    sponsorFirstName: 'Randal',
                    sponsorLastName: 'Orton',
                    investmentAmount: 80000,
                }
            ],
            yearOfRelease: 2014,
            siteCost: 70000,
        },
        {
            companyName: 'Unsplash',
            owner: 'Barbara Blank',
            sponsors: [
                {
                    sponsorFirstName: 'Phillip',
                    sponsorLastName: 'Brooks',
                    investmentAmount: 15000,
                },
                {
                    sponsorFirstName: 'April',
                    sponsorLastName: 'Mendez',
                    investmentAmount: 10000,
                }
            ],
            yearOfRelease: 2008,
            siteCost: 20000,
        },
        {
            companyName: 'Pinterest',
            owner: 'Saraya-Jade Bevis',
            sponsors: [
                {
                    sponsorFirstName: 'Rhea',
                    sponsorLastName: 'Ripley',
                    investmentAmount: 81000,
                },
                {
                    sponsorFirstName: 'Gionna',
                    sponsorLastName: 'Daddio',
                    investmentAmount: 35000,
                }
            ],
            yearOfRelease: 2015,
            siteCost: 110000,
        }
    ]

    // 1) загальну вартість усіх сайтів
    const totalSitesCost = websites.reduce((prevCost, company) => prevCost + company.siteCost, 0);
    document.write(`1. 3агальнa вартість усіх сайтів: ${totalSitesCost}<br>`)

    // 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
    const sitesFrom2000To2009 = websites.filter((site) => site.yearOfRelease >= 2000 && site.yearOfRelease <= 2009).length;
    document.write(`2. Kількість сайтів, що було зроблено між 2000 та 2009 рр.: ${sitesFrom2000To2009}<br>`)

    // 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
    const amountBiggerThan100000 = websites.filter((site) => site.sponsors.reduce((prevCost, amount) => prevCost + amount.investmentAmount, 0) > 100000).length;
    document.write(`3. Kількість сайтів, де сума спонсорських вкладень була більшою за 100000: ${amountBiggerThan100000}<br>`)

    // 4) створити загальний список усіх спонсорів(поки можуть повторюватись, просто зібрати усі у масив)
    const sponsorNames: string[] = websites.flatMap(site =>
        site.sponsors.map((s: Sponsors) => `${s.sponsorFirstName.trim()} ${s.sponsorLastName.trim()}`)
    );
    document.write(`4. 3агальний список усіх спонсорів: ${sponsorNames.join(', ')}<br>`);

    // 6) упорядкувати список за спаданням прибутку
    websites.forEach((site) => {
        const totalInvestment = site.sponsors.reduce((prevSum, sponsor) => prevSum + sponsor.investmentAmount, 0)
        const profit = totalInvestment - site.siteCost;
        site.profit = profit;
    })
    websites.sort((a, b) => (b.profit ?? 0) - (a.profit ?? 0))

    document.write(`6. Cписок компаній за спаданням прибутку:<br>`)

    websites.forEach(site => {
        document.write(`${site.companyName}: Прибуток = ${site.profit}<br>`);
    })

    // 5) знайти рік, коли прибуток був найбільшим
    const mostProfitableSite = websites[0];
    const year = mostProfitableSite.yearOfRelease;
    document.write(`5. Pік, коли прибуток був найбільшим: ${year}<br>`)

    // 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
    const siteCostLess100000 = websites
        .filter(site => site.siteCost <= 100000)    // сайти, де siteCost <= 100000
        .map(site => ({                             // створюэмо копії цих сайтів
            ...site,                                // копіюємо всі властивості сайту
            sponsors: [...site.sponsors]            // робимо окремий масив спонсорів
        }));

    const siteCostMore100000 = websites
        .filter(site => site.siteCost > 100000)
        .map(site => ({
            ...site,
            sponsors: [...site.sponsors]
        }));

    console.log(siteCostLess100000);
    console.log(siteCostMore100000);

    document.write(`7. Відповідь у консолі.`)
}
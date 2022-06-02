(function () {
    let lazyLoadInstance = new LazyLoad();
    const windowWidth = window.innerWidth;

    gsap.registerPlugin(ScrollTrigger);

    window.onload = function (e) {

        // tl
        const tl0 = gsap.timeline({
            scrollTrigger: {
                toggleActions: "play pause resume reverse",
                trigger: ".promo",
                start: "-100 center",
                end: "bottom top",
                scrub: false,
                pin: false,
                markers: false,
            },
        })

        tl0
            .fromTo(".promo__block img", {
                y: -20,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                delay: 0.2,
            })
            .fromTo(".promo__content > *", {
                y: -20,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                stagger: 0.2,
            })

        // tl
        const tl1 = gsap.timeline({
            scrollTrigger: {
                toggleActions: "play pause resume reverse",
                trigger: ".text-col--lines",
                start: "-200 center",
                end: "bottom top",
                scrub: false,
                pin: false,
                markers: false,
            },
        })

        tl1
            .fromTo(".text-col--lines .text-col__col .text-col__inner > *", {
                y: -20,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                stagger: 0.1,
            })

        // tl
        const tl2 = gsap.timeline({
            scrollTrigger: {
                toggleActions: "play pause resume reverse",
                trigger: ".design",
                start: "-100 center",
                end: "bottom top",
                scrub: false,
                pin: false,
                markers: false,
            },
        })

        tl2
            .fromTo(".design h2", {
                y: -20,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
            })
            .fromTo(".design p > *", {
                y: -20,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                stagger: 0.1,
            })

        // tl
        if (windowWidth >= 1200) {
            const tl3 = gsap.timeline({
                scrollTrigger: {
                    toggleActions: "play pause resume reverse",
                    trigger: ".design-pic",
                    start: "-100 center",
                    end: "bottom top",
                    scrub: true,
                    pin: false,
                    markers: false,
                },
            })

            tl3
                .fromTo(".design-pic img", {
                    y: "50%",
                }, {
                    y: "-35%",
                })
        }

        // tl
        const tl4 = gsap.timeline({
            scrollTrigger: {
                toggleActions: "play pause resume reverse",
                trigger: ".design-pic",
                start: "40% center",
                end: "bottom top",
                scrub: false,
                pin: false,
                markers: false,
            },
        })

        tl4
            .fromTo(".design-text > *", {
                y: -20,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                stagger: 0.1,
            }, "tl4")

        // tl
        let sectionsBottom = gsap.utils.toArray(".pic-grid__pic[data-direction='bottom']");

        sectionsBottom.forEach((sectionBottom) => {
            let items = sectionBottom.querySelector('img');
            let sectionsBottomTl = gsap.timeline({
                scrollTrigger: {
                    toggleActions: "play pause resume reverse",
                    trigger: sectionBottom,
                    start: "-50% center",
                    end: "150% center",
                    scrub: true,
                    pin: false,
                    markers: false,
                }
            })
            if (windowWidth >= 1200) {
                sectionsBottomTl
                    .fromTo(items, {
                        bottom: '100',
                    }, {
                        bottom: '-100',
                    })
            } else {
                sectionsBottomTl
                    .fromTo(items, {
                        bottom: '50',
                    }, {
                        bottom: '-50',
                    })

            }
        })

        // tl
        let sectionsTop = gsap.utils.toArray(".pic-grid__pic[data-direction='top']");

        sectionsTop.forEach((sectionTop) => {
            let items = sectionTop.querySelector('img');
            let sectionsTopTl = gsap.timeline({
                scrollTrigger: {
                    toggleActions: "play pause resume reverse",
                    trigger: sectionTop,
                    start: "-100% center",
                    end: "150% center",
                    scrub: true,
                    pin: false,
                    markers: false,
                }
            })
            if (windowWidth >= 1200) {
                sectionsTopTl
                    .fromTo(items, {
                        top: '100',
                    }, {
                        top: '-100',
                    })
            } else {
                sectionsTopTl
                    .fromTo(items, {
                        top: '50',
                    }, {
                        top: '-50',
                    })

            }
        })

        // tl
        const tl5 = gsap.timeline({
            scrollTrigger: {
                toggleActions: "play pause resume reverse",
                trigger: ".uniq",
                start: "-100 center",
                end: "bottom top",
                scrub: false,
                pin: false,
                markers: false,
            },
        })

        tl5
            .fromTo(".uniq__content > *", {
                y: -20,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                stagger: 0.1,
            }, 'tl5')
            .fromTo(".uniq__content-col > *", {
                y: -20,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                stagger: 0.1,
            }, 'tl5')
            .fromTo(".uniq__benefits > *", {
                y: -20,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                delay: 0.5
            }, 'tl5')
            .fromTo(".uniq__benefit > *", {
                y: -20,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                delay: 0.5
            }, 'tl5')


        // tl
        if (windowWidth >= 1200) {
            const tl6 = gsap.timeline({
                scrollTrigger: {
                    toggleActions: "play pause resume reverse",
                    trigger: ".uniq",
                    start: "-25% center",
                    end: "125% top",
                    scrub: true,
                    pin: false,
                    markers: false,
                },
            })

            tl6
                .fromTo(".uniq__pic img", {
                    y: "25%",
                }, {
                    y: "-25%",
                })
        }

        // tl
        const tl7 = gsap.timeline({
            scrollTrigger: {
                toggleActions: "play pause resume reverse",
                trigger: ".reload",
                start: "-100 center",
                end: "bottom top",
                scrub: false,
                pin: false,
                markers: false,
            },
        })

        tl7
            .fromTo(".reload__title > *", {
                y: -20,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                stagger: 0.1,
            })
            .fromTo(".reload__block > *", {
                y: -20,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                stagger: 0.1,
            })
            .fromTo(".reload__video > *", {
                y: -20,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                stagger: 0.1,
            })

        // tl
        const tl8 = gsap.timeline({
            scrollTrigger: {
                toggleActions: "play pause resume reverse",
                trigger: ".sights",
                start: "-100 center",
                end: "bottom top",
                scrub: false,
                pin: false,
                markers: false,
            },
        })

        tl8
            .fromTo(".sights__col > *", {
                y: -20,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                stagger: 0.1,
            })

        // tl
        if (windowWidth >= 1200) {
            const tl_content = gsap.timeline({
                scrollTrigger: {
                    toggleActions: "play pause resume reverse",
                    trigger: ".prisma",
                    start: `-100% top`,
                    end: `top top`,
                    scrub: true,
                    pin: false,
                    markers: false,
                },
            })

            tl_content
                .fromTo(".prisma__inner", {
                    top: `-${parseFloat(getComputedStyle(document.querySelector('.prisma'), null).height.replace("px", ""))}`,
                    opacity: 0.5,
                }, {
                    top: '0px',
                    opacity: 1,
                })
        }

        // tl
        const tl9 = gsap.timeline({
            scrollTrigger: {
                toggleActions: "play pause resume reverse",
                trigger: ".trigger",
                start: "-100 center",
                end: "bottom top",
                scrub: false,
                pin: false,
                markers: false,
            },
        })

        tl9
            .fromTo(".trigger__content-big > *", {
                y: -20,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                stagger: 0.1,
            }, 'tl9')
            .fromTo(".trigger__content-small > *", {
                y: -20,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                delay: 0.2,
                stagger: 0.1,
            }, 'tl9')

        if (windowWidth >= 1200) {
            // tl
            const tl9_2 = gsap.timeline({
                scrollTrigger: {
                    toggleActions: "play pause resume reverse",
                    trigger: ".trigger",
                    start: "-100 center",
                    end: "bottom top",
                    scrub: true,
                    pin: false,
                    markers: false,
                },
            })

            tl9_2
                .fromTo(".trigger__pic img", {
                    y: "50%",
                }, {
                    y: "-35%",
                })
        }

        // tl
        const tl_mask = gsap.timeline({
            scrollTrigger: {
                toggleActions: "play pause resume reverse",
                trigger: ".mask-track",
                pin: ".pin",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                markers: false,
            },
        })

        if (windowWidth >= 1200) {
            tl_mask
                .fromTo(".mask", {
                    '-webkit-mask-size': '0%',
                    'mask-size': '0%',
                }, {
                    '-webkit-mask-size': '180%',
                    'mask-size': '180%',
                })
        } else {
            tl_mask
                .fromTo(".mask", {
                    '-webkit-mask-size': '0%',
                    'mask-size': '0%',
                }, {
                    '-webkit-mask-size': '350%',
                    'mask-size': '350%',
                })
        }

        // tl
        const tl10 = gsap.timeline({
            scrollTrigger: {
                toggleActions: "play pause resume reverse",
                trigger: ".x2-content",
                start: "-100 center",
                end: "bottom top",
                scrub: false,
                pin: false,
                markers: false,
            },
        })

        tl10
            .fromTo(".x2-content__big p > *", {
                y: -20,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                stagger: 0.1,
            })
            .fromTo(".x2-content__small > *", {
                y: -20,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                stagger: 0.1,
            }, 'tl9')


        // preload animation images
        const imagesRotate = [
            "./img/seq/1",
            "./img/seq/2",
            "./img/seq/3",
            "./img/seq/4",
            "./img/seq/5",
            "./img/seq/6",
            "./img/seq/7",
            "./img/seq/8",
            "./img/seq/9",
            "./img/seq/10",
            "./img/seq/11",
            "./img/seq/12",
            "./img/seq/13",
            "./img/seq/14",
            "./img/seq/15",
            "./img/seq/16",
            "./img/seq/17",
            "./img/seq/18",
            "./img/seq/19",
            "./img/seq/20",
            "./img/seq/21",
            "./img/seq/22",
            "./img/seq/23",
            "./img/seq/24",
            "./img/seq/25",
            "./img/seq/26",
            "./img/seq/27",
            "./img/seq/28",
            "./img/seq/29",
            "./img/seq/30",
            "./img/seq/31",
            "./img/seq/32",
            "./img/seq/33",
            "./img/seq/34",
            "./img/seq/35",
            "./img/seq/36",
            "./img/seq/37",
            "./img/seq/38",
            "./img/seq/39",
            "./img/seq/40",
            "./img/seq/41",
            "./img/seq/42",
            "./img/seq/43",
            "./img/seq/44",
            "./img/seq/45",
            "./img/seq/46",
            "./img/seq/47",
            "./img/seq/48",
            "./img/seq/49",
            "./img/seq/50",
            "./img/seq/51",
            "./img/seq/52",
            "./img/seq/53",
            "./img/seq/54",
            "./img/seq/55",
            "./img/seq/56",
            "./img/seq/57",
            "./img/seq/58",
            "./img/seq/59",
            "./img/seq/60",
            "./img/seq/61",
            "./img/seq/62",
            "./img/seq/63",
            "./img/seq/64",
            "./img/seq/65",
            "./img/seq/66",
            "./img/seq/67",
            "./img/seq/68",
            "./img/seq/69",
            "./img/seq/70",
            "./img/seq/71",
            "./img/seq/72",
            "./img/seq/73",
            "./img/seq/74",
            "./img/seq/75",
            "./img/seq/76",
            "./img/seq/77",
            "./img/seq/78",
            "./img/seq/79",
            "./img/seq/80",
            "./img/seq/81",
            "./img/seq/82",
            "./img/seq/83",
            "./img/seq/84",
            "./img/seq/85",
            "./img/seq/86",
            "./img/seq/87",
            "./img/seq/88",
            "./img/seq/89",
            "./img/seq/90",
            "./img/seq/91",
            "./img/seq/92",
            "./img/seq/93",
            "./img/seq/94",
            "./img/seq/95",
            "./img/seq/96",
            "./img/seq/97",
            "./img/seq/98",
            "./img/seq/99",
            "./img/seq/100",
            "./img/seq/101",
            "./img/seq/102",
            "./img/seq/103",
            "./img/seq/104",
            "./img/seq/105",
            "./img/seq/106",
            "./img/seq/107",
            "./img/seq/108",
            "./img/seq/109",
            "./img/seq/110",
            "./img/seq/111",
            "./img/seq/112",
            "./img/seq/113",
            "./img/seq/114",
            "./img/seq/115",
            "./img/seq/116",
            "./img/seq/117",
            "./img/seq/118",
            "./img/seq/119",
            "./img/seq/120",
            "./img/seq/121",
            "./img/seq/122",
            "./img/seq/123",
            "./img/seq/124",
            "./img/seq/125",
            "./img/seq/126",
            "./img/seq/127",
            "./img/seq/128",
            "./img/seq/129",
            "./img/seq/130",
            "./img/seq/131",
            "./img/seq/132",
            "./img/seq/133",
            "./img/seq/134",
            "./img/seq/135",
            "./img/seq/136",
            "./img/seq/137",
            "./img/seq/138",
            "./img/seq/139",
            "./img/seq/140",
            "./img/seq/141",
            "./img/seq/142",
            "./img/seq/143",
            "./img/seq/144",
            "./img/seq/145",
            "./img/seq/146",
            "./img/seq/147",
            "./img/seq/148",
            "./img/seq/149",
            "./img/seq/150",
            "./img/seq/151",
            "./img/seq/152",
            "./img/seq/153",
            "./img/seq/154",
            "./img/seq/155",
            "./img/seq/156",
            "./img/seq/157",
            "./img/seq/158",
            "./img/seq/159",
            "./img/seq/160",
            "./img/seq/161",
            "./img/seq/162",
            "./img/seq/163",
            "./img/seq/164",
            "./img/seq/165",
            "./img/seq/166",
            "./img/seq/167",
            "./img/seq/168",
            "./img/seq/169",
        ];

        function preloadImage(url) {
            var img = new Image();
            img.src = url;
        }

        function canUseWebP() {
            var elem = document.createElement('canvas');

            if (!!(elem.getContext && elem.getContext('2d'))) {
                // was able or not to get WebP representation
                return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
            }

            // very old browser like IE 8, canvas not supported
            return false;
        }

        let extension = (canUseWebP()) ? '.webp' : '.jpg';

        function preloadImages() {

            for (let image of imagesRotate) {
                preloadImage(image + extension);
            }
        }

        preloadImages();


        Array.prototype.forEach.call(imagesRotate, function (el, index) {
            let src = `${el}`;

            let pcr = document.createElement("PICTURE");
            let sc1 = document.createElement("SOURCE");
            let sc2 = document.createElement("SOURCE");
            let img = document.createElement("IMG");

            pcr.srcset = `${src}.webp`;
            pcr.type = "image/webp";
            sc1.srcset = `${src}.jpg`;
            sc1.type = "image/jpeg";
            sc2.srcset = `${src}.jpg`;
            sc2.type = "image/jpeg";
            img.src = `${src}.jpg`;
            img.classList.add('js-bumper-image')
            img.dataset.id = `bumper-image-${index}`
            img.alt = "";

            pcr.appendChild(sc1);
            pcr.appendChild(sc2);
            pcr.appendChild(img);
            document.querySelector('.js-bumper-block').appendChild(pcr);
        });

        let bumperAnimationendPoint = (windowWidth >= 1200) ? 5000 : 3000;
        let tl_bumper = gsap.timeline({
            scrollTrigger: {
                toggleActions: "play none none reverse",
                trigger: ".bumper-track",
                start: "top top",
                end: `${bumperAnimationendPoint} bottom`,
                scrub: 1,
                markers: false,
                id: "tl_bumper",
                pin: '.bumper__seq',
                onUpdate: (self) => {
                    curImg = parseInt(self.progress * imagesRotate.length - 1) || imagesRotate.length;
                    Array.prototype.forEach.call(document.querySelector('.js-bumper-block').querySelectorAll('.js-bumper-image'), function (el, i) {
                        if (el.dataset.id === `bumper-image-${curImg}`) {
                            el.classList.add('active');
                        } else {
                            el.classList.remove('active');
                        }
                    });
                }
            }
        })

        tl_bumper
            .fromTo('.bumper__seq', {
                opacity: 1
            }, {
                delay: 1,
                delay: 0.9,
                opacity: 0.2,
            })


        let tl_bumper_2 = gsap.timeline({
            scrollTrigger: {
                toggleActions: "play none none reverse",
                trigger: ".bumper-track",
                start: `${bumperAnimationendPoint - parseFloat(getComputedStyle(document.querySelector('.bumper__content'), null).height.replace("px", "")) * 1.5} center`,
                end: `${bumperAnimationendPoint} center`,
                scrub: 0.5,
                markers: false,
                pin: false,
            }
        })
        if (windowWidth >= 1200) {
            tl_bumper_2
                .fromTo('.bumper__benefits > :nth-child(1), .bumper__benefits > :nth-child(4)', {
                    top: 100,
                }, {
                    duration: 10,
                    top: 0,
                }, 'tl_bumper_2')
                .fromTo('.bumper__benefits > :nth-child(2), .bumper__benefits > :nth-child(5)', {
                    top: 200,
                }, {
                    duration: 10,
                    top: 0,
                }, 'tl_bumper_2')
                .fromTo('.bumper__benefits > :nth-child(3), .bumper__benefits > :nth-child(6)', {
                    top: 300,
                }, {
                    duration: 10,
                    top: 0,
                }, 'tl_bumper_2')
        }

        // tl
        const tl11 = gsap.timeline({
            scrollTrigger: {
                toggleActions: "play pause resume reverse",
                trigger: ".aim",
                start: "-10% center",
                end: "110% top",
                scrub: true,
                pin: false,
                markers: false,
            },
        })

        tl11
            .fromTo(".aim__pic", {
                y: '+=20%',
            }, {
                y: '-=20%',
            })

        // tl
        const tl12 = gsap.timeline({
            scrollTrigger: {
                toggleActions: "play pause resume reverse",
                trigger: ".aim",
                start: "-100 center",
                end: "bottom top",
                scrub: false,
                pin: false,
                markers: false,
            },
        })

        tl12
            .set(".aim__pic", { className: "aim__pic anim" })
            .fromTo(".aim__pic", {
                opacity: 0,
            }, {
                opacity: 1,
            })
            .fromTo(".aim__content > *", {
                y: -20,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                stagger: 0.1,
            })

        //
        let sections = gsap.utils.toArray(".benefits__item");

        sections.forEach((section) => {
            let pic = section.querySelector('.benefits__pic img')
            let benefitsTl = gsap.timeline({
                scrollTrigger: {
                    toggleActions: "play pause resume reverse",
                    trigger: section,
                    start: 'top bottom',
                    end: "bottom top",
                    scrub: true,
                    pin: false,
                    markers: false,
                }
            })
            if (windowWidth >= 1200) {
                benefitsTl
                    .fromTo(pic, {
                        y: 100,
                    }, {
                        y: -100,
                    })
            } else {
                benefitsTl
                .fromTo(pic, {
                    y: 50,
                }, {
                    y: -50,
                })
            }

            let title = section.querySelector('.benefits__content h2');
            let cols = section.querySelectorAll('.benefits__content-col > *');
            gsap.timeline({
                scrollTrigger: {
                    toggleActions: "play pause resume reverse",
                    trigger: section,
                    start: 'top center',
                    end: "bottom center",
                    scrub: false,
                    pin: false,
                    markers: false,
                }
            })
                .fromTo(title, {
                    y: -20,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1
                })
                .fromTo(cols, {
                    y: -20,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2
                })
        })

        // tl
        const tl13 = gsap.timeline({
            scrollTrigger: {
                toggleActions: "play pause resume reverse",
                trigger: ".add",
                start: "-100 center",
                end: "bottom top",
                scrub: false,
                pin: false,
                markers: false,
            },
        })

        if (windowWidth >= 1200) {
            tl13
                .fromTo(".add__pic img", {
                    y: '-40%',
                    opacity: 0,
                }, {
                    y: '-45%',
                    opacity: 1,
                })
        } else {
            tl13
                .fromTo(".add__pic img", {
                    y: '-5%',
                    opacity: 0,
                }, {
                    y: '0%',
                    opacity: 1,
                })

        }
    }// window loaded
})();
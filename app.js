const { createApp } = Vue;

createApp({
    data() {
        return {
            posts: [
                {
                    id: 1,
                    title: "雅思学习经验分享",
                    summary: "分享我的雅思备考心得和高效学习方法。从听说读写四个方面，详细介绍如何在短时间内提升雅思成绩。",
                    link: "#"
                },
                {
                    id: 2,
                    title: "人工智能入门指南",
                    summary: "探索AI的奥秘，从机器学习基础到深度学习应用。带你了解当前最热门的AI技术发展趋势和实践案例。",
                    link: "#"
                },
                {
                    id: 3,
                    title: "提升个人魅力的秘诀",
                    summary: "探讨如何提升个人形象、沟通技巧和社交能力。从内而外打造独特的个人品牌，提升职场和生活中的影响力。",
                    link: "#"
                }
            ],
            images: [
                '1.jpg',
                '2.jpg',
                '3.jpg'
            ],
            currentIndex: 0,
            interval: null
        };
    },
    methods: {
        scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        },
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        prevImage() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        },
        startCarousel() {
            this.interval = setInterval(() => {
                this.nextImage();
            }, 3000); // 每 3 秒切换一次
        }
    },
    mounted() {
        this.startCarousel();
    },
    beforeUnmount() {
        clearInterval(this.interval); // 清除定时器
    }
}).mount('#app');
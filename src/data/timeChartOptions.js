export default {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
		data: ['百度', '谷歌','知乎','Stack Overflow','GitHub']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
		type: 'value',
		axisLabel: {
			show: false
		}
    },
    yAxis: {
        type: 'category',
		data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
		axisLabel: {
			show: false
		}
    },
    series: [
        {
            name: '百度',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [320, 22, 567, 238, 90, 400]
        },
        {
            name: '谷歌',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [120, 100, 10, 27, 100, 600, 102]
        },
        {
            name: '知乎',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [220, 245, 210, 100, 20, 10]
        },
        {
            name: 'Stack Overflow',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [150, 130, 134, 100, 70, 10, 300]
        },
        {
            name: 'GitHub',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [820, 340, 560, 200, 200, 500]
        }
    ]
};
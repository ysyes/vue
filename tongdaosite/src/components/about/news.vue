<template>
	<div class="news">
		<div class="new_nav">
			<p>
				<span>新闻咨询</span>
			</p>
		</div>
		<div class="news_list" :class="{show:idx.indexOf(1)!=-1}">
			<div class="new_intro">
				<div class="new_intro_left">
					<img src="../../assets/img/about/news/new01.jpg" />
				</div>
				<div class="new_intro_right">
					<p>同道伟业三周年，感恩有你相伴！</p>
					<p>从公司成立之初的行业菜鸟，经历了不断探索的成长蜕变，发展成为大数据业界的龙头老大，这条看似难以置信的奋斗之路，同道伟业留下了三年的光辉印记。</p>
					<p>
						2018-09-09
						<img src="../../assets/img/about/pinglun.png" />
					</p>
				</div>
				<div class="news_jt" @click="show(1)">
					<img src="../../assets/img/about/jt.png" />
				</div>
			</div>
			<div class="news_detail">
				<p>同道伟业三周年，感恩有你相伴！<span>2018-09-09</span></p>
				<p>从公司成立之初的行业菜鸟，经历了不断探索的成长蜕变，发展成为大数据业界的龙头老大，这条看似难以置信的奋斗之路，同道伟业留下了三年的光辉印记。
					<br />三年光阴，雕刻铿锵步履；三年艰辛，见证卓越成长；三年历练，磨砺探索精神；三年耕耘，收获丰硕成果。</p>
				<p><img src="../../assets/img/about/news/new01.jpg"/></p>
				<p>查看全部评论</p>
				<p>That would be Bespoke Post, which helps guys mix drinks</p>
				<p>That would be Bespoke Post whic</p>
				<p>
					<input type="text" placeholder="添加评论..." />
				</p>
				<p @click="show(1)"><img src="../../assets/img/about/jt.png" /></p>
			</div>
		</div>
		<div class="news_list" :class="{show:idx.indexOf(2)!=-1}">
			<div class="new_intro">
				<div class="new_intro_left">
					<img src="../../assets/img/about/news/new02.jpg" />
				</div>
				<div class="new_intro_right">
					<p>助力上海上港的神秘武器，智慧球场引领中国足球新变革</p>
					<p>2018年俄罗斯世界杯刚刚结束，除了32支球队的精彩发挥外，本届赛事中的Video Assistant Referees（VAR视频裁判）系统也赚足了世界的眼球。其主要作用是将比赛实时画面与虚拟画面相结合，通过多角度、高清晰的画面以3D的方式还原比赛细节，让球场上球员的每...</p>
					<p>
						2018-07-20
						<img src="../../assets/img/about/pinglun.png" />
					</p>
				</div>
				<div class="news_jt" @click="show(2)">
					<img src="../../assets/img/about/jt.png" />
				</div>
			</div>
			<div class="news_detail">
				<p>助力上海上港的神秘武器，智慧球场引领中国足球新变革<span>2018-07-20</span></p>
				<p>2018年俄罗斯世界杯刚刚结束，除了32支球队的精彩发挥外，本届赛事中的Video Assistant Referees（VAR视频裁判）系统也赚足了世界的眼球。其主要作用是将比赛实时画面与虚拟画面相结合，通过多角度、高清晰的画面以3D的方式还原比赛细节，让球场上球员的每一动作都清清楚楚的展现在裁判的眼中，使足球比赛变的更加公正公平。

     <br />如今该技术并非只用于世界杯，国内知名足球数据服务商北京同道伟业体育科技有限公司已将该技术引入到中国。提及同道伟业，足球圈内无人不知，无人不晓，精耕足球数据是这家公司自成立以来对外宣传的重要标签。随着足球产业的深入发展，足球市场业务的多元化也加快了进程，作为以数据服务为基础发展点的同道伟业，在近两年中同样依靠手中的数据积淀完成了诸多创举。

     <br />同道伟业已经将瑞典的Spiideo系统引进入了上海上港的足球训练基地，上海上港俱乐部也成为继英超切尔西，葡超葡萄牙体育，以及俄超，瑞超，美国大联盟外中国首家搭建Spiideo系统的足球俱乐部。</p>
				<p><img src="../../assets/img/about/news/new02.jpg"/></p>
				<p>查看全部评论</p>
				<p>That would be Bespoke Post, which helps guys mix drinks</p>
				<p>That would be Bespoke Post whic</p>
				<p>
					<input type="text" placeholder="添加评论..." />
				</p>
				<p @click="show(2)"><img src="../../assets/img/about/jt.png" /></p>
			</div>
		</div>
		<div class="news_list" :class="{show:idx.indexOf(3)!=-1}">
			<div class="new_intro">
				<div class="new_intro_left">
					<img src="../../assets/img/about/news/new03.jpg" />
				</div>
				<div class="new_intro_right">
					<p>同道伟业熊猫竞彩官方旗舰店正式开业</p>
					<p>北京时间6月4日上午，同道伟业旗下的熊猫竞彩官方旗舰店在云南昆明盛装开业，该店是一家集数据查询与购彩交友为一体的彩票运营网点，而熊猫竞彩正是同道伟业在世界杯来临之际重点为广大彩民倾力打造的又一佳作巨献。</p>
					<p>
						2018-06-04
						<img src="../../assets/img/about/pinglun.png" />
					</p>
				</div>
				<div class="news_jt" @click="show(3)">
					<img src="../../assets/img/about/jt.png" />
				</div>
			</div>
			<div class="news_detail">
				<p>同道伟业熊猫竞彩官方旗舰店正式开业 <span>2018-06-04</span></p>
				<p>北京时间6月4日上午，同道伟业旗下的熊猫竞彩官方旗舰店在云南昆明盛装开业，该店是一家集数据查询与购彩交友为一体的彩票运营网点，而熊猫竞彩正是同道伟业在世界杯来临之际重点为广大彩民倾力打造的又一佳作巨献。
					<br />上午11时18分，在旗舰店门前举行了隆重的开业典礼，云南省体育局以及体彩局的领导出席开业盛典，并纷纷道贺。旗舰店门前花团锦簇，鞭炮齐鸣，场面热闹非凡，欢庆的场面吸引了众多当地市民前来围观助兴。
					<br />走进旗舰店，170平米的空间打造出宽敞明亮的整体观感，世界杯各大主题宣传材料营造了一个浓郁的体验氛围。世界杯32强宣传海报，32强豪门阅兵以及全赛程一目了然地在店面的核心区得到了充分展示。此外，内设购彩大厅、大数据中心、VIP室，更有大屏幕液晶电视及多台电脑，设备完善，环境舒适，为彩民朋友提供了宣传、咨询、售票、查询和休闲的一条龙、一站式服务，最大程度满足了彩民的购彩体验。
					<br />与此同时，熊猫竞彩线上APP预计将在本周正式上线，小编在这里提前为大家透露一下，线上APP将会出现13位专业竞彩分析专家前来助阵，为广大彩民提供咨询和线上推荐，帮助彩民分析彩市行情，指导彩民科学购彩，用提升中单率的方式尽可能满足广大彩民的实际需求。
				</p>
				<p><img src="../../assets/img/about/news/new03.jpg"/></p>
				<p>查看全部评论</p>
				<p>That would be Bespoke Post, which helps guys mix drinks</p>
				<p>That would be Bespoke Post whic</p>
				<p>
					<input type="text" placeholder="添加评论..." />
				</p>
				<p @click="show(3)"><img src="../../assets/img/about/jt.png" /></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'News',
		data() {	//初始化变量，（数据）
			return {
				msg: 'Welcome to Your Vue.js App',
				idx:[]
			}
		},
		computed:{ //计算属性
			
		},
		
		methods:{ //事件及方法
			show(i){
				if (this.idx.indexOf(i) == -1) {
					this.idx.push(i);
				}else{
					this.idx.splice(this.idx.indexOf(i),1)
				}
				
			}
		}
	}
</script>

<style scoped lang="less">
	@import 'news.less';
</style>
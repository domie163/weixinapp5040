<template>
    <view class="content">
        <form class="app-update-pv">
                <!--<view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">赛事信息</view>
                    <picker @change="saishixinxiChange" :value="saishixinxiIndex" :range="saishixinxiOptions" range-key="saishixinxiName">
                        <view
                                :style='{"padding":"0 30rpx","boxShadow":"0 0 16rpx var(--publicSubColor) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"var(--publicMainColor)","borderRadius":"20rpx","color":"var(--publicMainColor)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                                class="uni-input">{{ruleForm.saishixinxiId?ruleForm.saishixinxiName:"请选择赛事信息"}}</view>
                    </picker>
                </view>-->
                <!--<view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">球员</view>
                    <picker @change="qiuyuanChange" :value="qiuyuanIndex" :range="qiuyuanOptions" range-key="qiuyuanName">
                        <view
                                :style='{"padding":"0 30rpx","boxShadow":"0 0 16rpx var(--publicSubColor) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"var(--publicMainColor)","borderRadius":"20rpx","color":"var(--publicMainColor)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                                class="uni-input">{{ruleForm.qiuyuanId?ruleForm.qiuyuanName:"请选择球员"}}</view>
                    </picker>
                </view>-->
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">赛事详情编号</view>
                <input   disabled
                         :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"var(--publicMainColor)","borderRadius":"16rpx","color":"var(--publicMainColor)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.saishixinxiXiangqingUuidNumber" type="text" v-model="ruleForm.saishixinxiXiangqingUuidNumber" placeholder="赛事详情编号"></input>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">标题</view>
                <input   disabled
                         :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"var(--publicMainColor)","borderRadius":"16rpx","color":"var(--publicMainColor)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.saishixinxiXiangqingName" type="text" v-model="ruleForm.saishixinxiXiangqingName" placeholder="标题"></input>
            </view>
                <view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">类型</view>
                    <picker @change="saishixinxiXiangqingTypesChange" :value="saishixinxiXiangqingTypesIndex" :range="saishixinxiXiangqingTypesOptions" range-key="indexName">
                        <view
                                :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"var(--publicMainColor)","borderRadius":"16rpx","color":"var(--publicMainColor)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                                class="uni-input">{{ruleForm.saishixinxiXiangqingTypes?ruleForm.saishixinxiXiangqingValue:"请选择类型"}}</view>
                    </picker>
                </view>
                <view
                        :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(218, 220, 219, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"108rpx"}'
                        class="cu-form-group" @tap="saishixinxiXiangqingFileTap">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">附件</view>
                    <view class="right-input" style="padding:0;textAlign:left">
                        <image
                                :style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
                                class="avator" v-if="ruleForm.saishixinxiXiangqingFile" :src="baseUrl+ruleForm.saishixinxiXiangqingFile" mode="aspectFill">
                        </image>
                        <image  :style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
                                class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
                    </view>
                </view>
					                <view
                        :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                        class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">分值</view>
                    <input   disabled
                             :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"var(--publicMainColor)","borderRadius":"16rpx","color":"var(--publicMainColor)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                             :disabled="ro.saishixinxiXiangqingDefen" type="number" v-model="ruleForm.saishixinxiXiangqingDefen" placeholder="分值"></input>
                </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">发生时间</view>
                <input
                        :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"var(--publicMainColor)","borderRadius":"16rpx","color":"var(--publicMainColor)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                        v-model="ruleForm.saishixinxiXiangqingTime" placeholder="发生时间" :readonly="ro.saishixinxiXiangqingTime"
                        @tap="toggleTab('saishixinxiXiangqingTime')"></input>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"210rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">详情</view>
                <textarea :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"var(--publicMainColor)","borderRadius":"16rpx","color":"var(--publicMainColor)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx","height":"200rpx"}'
                          :disabled="ro.saishixinxiXiangqingContent" v-model="ruleForm.saishixinxiXiangqingContent" placeholder="详情"/>
            </view>

            <view class="btn">
                <button
                        :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","backgroundColor":"var(--publicMainColor)","borderColor":"#409EFF","borderRadius":"8rpx","color":"rgba(255, 255, 255, 1)","borderWidth":"0","width":"70%","fontSize":"32rpx","borderStyle":"solid","height":"80rpx"}'
                        @tap="onSubmitTap" class="bg-red">提交</button>
            </view>
        </form>

					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="saishixinxiXiangqingTimeConfirm"
                              ref="saishixinxiXiangqingTime" themeColor="#333333"></w-picker>
					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="insertTimeConfirm"
                              ref="insertTime" themeColor="#333333"></w-picker>
					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="createTimeConfirm"
                              ref="createTime" themeColor="#333333"></w-picker>


    </view>
</template>

<script>
    import wPicker from "@/components/w-picker/w-picker.vue";

    export default {
        data() {
            return {
                cross: '',
                ro:{
					saishixinxiId: false,
					qiuyuanId: false,
					saishixinxiXiangqingUuidNumber: true,
					saishixinxiXiangqingName: false,
					saishixinxiXiangqingTypes: false,
					saishixinxiXiangqingFile: false,
					saishixinxiXiangqingDefen: false,
					saishixinxiXiangqingTime: false,
					saishixinxiXiangqingContent: false,
					insertTime: false,
					createTime: false,
        },
            ruleForm: {
					saishixinxiId: '',
					qiuyuanId: '',
					saishixinxiXiangqingUuidNumber: this.getUUID(),//数字
					saishixinxiXiangqingName: '',
					saishixinxiXiangqingTypes: '',//数字
					saishixinxiXiangqingValue: '',//数字对应的值
					saishixinxiXiangqingFile: '',
					saishixinxiXiangqingDefen: '',
					saishixinxiXiangqingTime: '',
					saishixinxiXiangqingContent: '',
					insertTime: '',
					createTime: '',
            },
            // 登陆用户信息
            user: {},
            saishixinxiXiangqingTypesOptions: [],
            saishixinxiXiangqingTypesIndex : 0,
            saishixinxiOptions: [],//赛事信息
            saishixinxiIndex : 0,//赛事信息下标
            qiuyuanOptions: [],//球员
            qiuyuanIndex : 0,//球员下标

        }
        },
        components: {
            wPicker
        },
        computed: {
            baseUrl() {
                return this.$base.url;
            },
        },
        async onLoad(options) {
            let saishixinxiParams = {
                page: 1,
                limit: 100,
            }
            let saishixinxiData = await this.$api.page(`saishixinxi`, saishixinxiParams);
            this.saishixinxiOptions = saishixinxiData.data.list;
            let qiuyuanParams = {
                page: 1,
                limit: 100,
            }
            let qiuyuanData = await this.$api.page(`qiuyuan`, qiuyuanParams);
            this.qiuyuanOptions = qiuyuanData.data.list;
		/*下拉框*/
			let saishixinxiXiangqingTypesParams = {
                page: 1,
                limit: 100,
                dicCode: 'saishixinxi_xiangqing_types',
            }
			let saishixinxiXiangqingTypes = await this.$api.page(`dictionary`, saishixinxiXiangqingTypesParams);
			this.saishixinxiXiangqingTypesOptions = saishixinxiXiangqingTypes.data.list


            // 如果是更新操作
            if (options.id) {
                this.ruleForm.id = options.id;
                // 获取信息
                let res = await this.$api.info(`saishixinxiXiangqing`, this.ruleForm.id);
                this.ruleForm = res.data;
            }
            if(options.saishixinxiXiangqingId){
                this.ruleForm.saishixinxiXiangqingId = options.saishixinxiXiangqingId;
            }
            // 跨表
            // this.styleChange()
        },
        methods: {
            saishixinxiChange(e) {
                this.saishixinxiIndex = e.target.value
                this.ruleForm.saishixinxiName = this.saishixinxiOptions[this.saishixinxiIndex].saishixinxiName
                this.ruleForm.saishixinxiId = this.saishixinxiOptions[this.saishixinxiIndex].id
            },
            qiuyuanChange(e) {
                this.qiuyuanIndex = e.target.value
                this.ruleForm.qiuyuanName = this.qiuyuanOptions[this.qiuyuanIndex].qiuyuanName
                this.ruleForm.qiuyuanId = this.qiuyuanOptions[this.qiuyuanIndex].id
            },
            // 下拉变化
            saishixinxiXiangqingTypesChange(e) {
                this.saishixinxiXiangqingTypesIndex = e.target.value
                this.ruleForm.saishixinxiXiangqingValue = this.saishixinxiXiangqingTypesOptions[this.saishixinxiXiangqingTypesIndex].indexName
                this.ruleForm.saishixinxiXiangqingTypes = this.saishixinxiXiangqingTypesOptions[this.saishixinxiXiangqingTypesIndex].codeIndex
            },
            // styleChange() {
            // 	this.$nextTick(() => {
            // 		// document.querySelectorAll('.app-update-pv .cu-form-group .uni-yaoxianStyle-yaoxianStyle').forEach(el=>{
            // 		//   el.style.backgroundColor = this.addUpdateForm.yaoxianStyle.content.backgroundColor
            // 		// })
            // 	})
            // },
			saishixinxiXiangqingFileTap() {
                let _this = this;
                this.$api.upload(function(res) {
                    _this.ruleForm.saishixinxiXiangqingFile = 'upload/' + res.file;
                    _this.$forceUpdate();
                    _this.$nextTick(() => {
                        // _this.styleChange()
                    })
                });
            },
			// 日期控件
			saishixinxiXiangqingTimeConfirm(val) {
                this.ruleForm.saishixinxiXiangqingTime = val.result;
                this.$forceUpdate();
            },
			// 日期控件
			insertTimeConfirm(val) {
                this.ruleForm.insertTime = val.result;
                this.$forceUpdate();
            },
			// 日期控件
			createTimeConfirm(val) {
                this.ruleForm.createTime = val.result;
                this.$forceUpdate();
            },

            getUUID() {
                return new Date().getTime();
            },
            async onSubmitTap() {
				if ((!this.ruleForm.saishixinxiXiangqingUuidNumber)) {
                    this.$utils.msg(`赛事详情编号不能为空`);
                    return
                }
				if ((!this.ruleForm.saishixinxiXiangqingName)) {
                    this.$utils.msg(`标题不能为空`);
                    return
                }
				if ((!this.ruleForm.saishixinxiXiangqingDefen) && (!this.$validate.isIntNumer(this.ruleForm.saishixinxiXiangqingDefen)) && this.ruleForm.saishixinxiXiangqingDefen >0) {
                    this.$utils.msg(`分值不能为空，不能小于0 格式为数字`);
                    return
                }
				if ((!this.ruleForm.saishixinxiXiangqingTime)) {
                    this.$utils.msg(`发生时间不能为空`);
                    return
                }
                // if(uni.getStorageSync('详情页传过来的Id')){
                //     this.ruleForm.zhuangxiuId = uni.getStorageSync('详情页传过来的Id')
                // }

                if (this.ruleForm.id) {
                    await this.$api.update(`saishixinxiXiangqing`, this.ruleForm);
                } else {
                    await this.$api.save(`saishixinxiXiangqing`, this.ruleForm);
                }
                uni.setStorageSync('pingluenStateState', true);
                this.$utils.msgBack('提交成功');
            },
            getDate(type) {
                const date = new Date();
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                let day = date.getDate();
                if (type === 'start') {
                    year = year - 60;
                } else if (type === 'end') {
                    year = year + 2;
                }
                month = month > 9 ? month : '0' + month;;
                day = day > 9 ? day : '0' + day;
                return `${year}-${month}-${day}`;
            },
            toggleTab(str) {
                this.$refs[str].show();
            }
        }
    }
</script>
<style lang="scss" scoped>
    .container {
        padding: 20upx;
    }

    .content:after {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        content: '';
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
    }

    textarea {
        border: 1upx solid #EEEEEE;
        border-radius: 20upx;
        padding: 20upx;
    }

    .title {
        width: 180upx;
    }

    .avator {
        width: 150upx;
        height: 60upx;
    }

    .right-input {
        flex: 1;
        text-align: left;
        padding: 0 24upx;
    }

    .cu-form-group.active {
        justify-content: space-between;
    }

    .cu-form-group .title {
        height: auto;
        line-height:30rpx
    }

    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 20upx 0;
    }

    .cu-form-group {
        padding: 0 24upx;
        background-color: transparent;
        min-height: inherit;
    }

    .cu-form-group+.cu-form-group {
        border: 0;
    }

    .cu-form-group uni-input {
        padding: 0 30upx;
    }

    .uni-input {
        padding: 0 30upx;
    }

    .cu-form-group uni-textarea {
        padding: 30upx;
        margin: 0;
    }

    .cu-form-group uni-picker::after {
        line-height: 80rpx;
    }

    .select .uni-input {
        line-height: 80rpx;
    }

    .input .right-input {
        line-height: 88rpx;
    }
</style>
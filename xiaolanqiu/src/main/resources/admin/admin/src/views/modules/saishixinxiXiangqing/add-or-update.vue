<template>
    <div class="addEdit-block">
        <el-form
                class="detail-form-content"
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="auto"
                >
            <el-row>
                <el-col :span="12"  v-if="sessionTable !='qiuyuan'">
                    <el-form-item class="select" v-if="type!='info'"  label="球员" prop="qiuyuanId">
                        <el-select v-model="ruleForm.qiuyuanId" :disabled="ro.qiuyuanId" filterable placeholder="请选择球员" @change="qiuyuanChange">
                            <el-option
                                    v-for="(item,index) in qiuyuanOptions"
                                    v-bind:key="item.id"
                                    :label="item.qiuyuanName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='qiuyuan' ">
                    <el-form-item class="input" v-if="type!='info'"  label="球员名称" prop="qiuyuanName">
                        <el-input v-model="qiuyuanForm.qiuyuanName"
                                  placeholder="球员名称" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="球员名称" prop="qiuyuanName">
                            <el-input v-model="ruleForm.qiuyuanName"
                                      placeholder="球员名称" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='qiuyuan' ">
                    <el-form-item class="input" v-if="type!='info'"  label="身高(米)" prop="shangpinShengao">
                        <el-input v-model="qiuyuanForm.shangpinShengao"
                                  placeholder="身高(米)" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="身高(米)" prop="shangpinShengao">
                            <el-input v-model="ruleForm.shangpinShengao"
                                      placeholder="身高(米)" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='qiuyuan' ">
                    <el-form-item class="input" v-if="type!='info'"  label="体重(kg)" prop="shangpinTizhong">
                        <el-input v-model="qiuyuanForm.shangpinTizhong"
                                  placeholder="体重(kg)" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="体重(kg)" prop="shangpinTizhong">
                            <el-input v-model="ruleForm.shangpinTizhong"
                                      placeholder="体重(kg)" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='qiuyuan' ">
                    <el-form-item class="input" v-if="type!='info'"  label="国籍" prop="guojiValue">
                        <el-input v-model="qiuyuanForm.guojiValue"
                                  placeholder="国籍" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="国籍" prop="guojiValue">
                            <el-input v-model="ruleForm.guojiValue"
                                      placeholder="国籍" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='qiuyuan' ">
                    <el-form-item class="input" v-if="type!='info'"  label="球员编号" prop="qiuyuanUuidNumber">
                        <el-input v-model="qiuyuanForm.qiuyuanUuidNumber"
                                  placeholder="球员编号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="球员编号" prop="qiuyuanUuidNumber">
                            <el-input v-model="ruleForm.qiuyuanUuidNumber"
                                      placeholder="球员编号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='qiuyuan' ">
                    <el-form-item class="input" v-if="type!='info'"  label="生日" prop="qiuyuanShengri">
                        <el-input v-model="qiuyuanForm.qiuyuanShengri"
                                  placeholder="生日" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="生日" prop="qiuyuanShengri">
                            <el-input v-model="ruleForm.qiuyuanShengri"
                                      placeholder="生日" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12" v-if="sessionTable !='qiuyuan' ">
                    <el-form-item class="upload" v-if="type!='info' && !ro.qiuyuanPhoto" label="球员照片" prop="qiuyuanPhoto">
                        <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (qiuyuanForm.qiuyuanPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.qiuyuanPhoto" label="球员照片" prop="qiuyuanPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.qiuyuanPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='qiuyuan' ">
                    <el-form-item class="input" v-if="type!='info'"  label="赞" prop="zanNumber">
                        <el-input v-model="qiuyuanForm.zanNumber"
                                  placeholder="赞" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="赞" prop="zanNumber">
                            <el-input v-model="ruleForm.zanNumber"
                                      placeholder="赞" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='qiuyuan' ">
                    <el-form-item class="input" v-if="type!='info'"  label="踩" prop="caiNumber">
                        <el-input v-model="qiuyuanForm.caiNumber"
                                  placeholder="踩" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="踩" prop="caiNumber">
                            <el-input v-model="ruleForm.caiNumber"
                                      placeholder="踩" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='qiuyuan' ">
                    <el-form-item class="input" v-if="type!='info'"  label="球员位置" prop="qiuyuanValue">
                        <el-input v-model="qiuyuanForm.qiuyuanValue"
                                  placeholder="球员位置" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="球员位置" prop="qiuyuanValue">
                            <el-input v-model="ruleForm.qiuyuanValue"
                                      placeholder="球员位置" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='qiuyuan' ">
                    <el-form-item class="input" v-if="type!='info'"  label="入队时间" prop="ruduiTime">
                        <el-input v-model="qiuyuanForm.ruduiTime"
                                  placeholder="入队时间" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="入队时间" prop="ruduiTime">
                            <el-input v-model="ruleForm.ruduiTime"
                                      placeholder="入队时间" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='saishixinxi'">
                    <el-form-item class="select" v-if="type!='info'"  label="赛事信息" prop="saishixinxiId">
                        <el-select v-model="ruleForm.saishixinxiId" :disabled="ro.saishixinxiId" filterable placeholder="请选择赛事信息" @change="saishixinxiChange">
                            <el-option
                                    v-for="(item,index) in saishixinxiOptions"
                                    v-bind:key="item.id"
                                    :label="item.saishixinxiUuidNumber"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='saishixinxi' ">
                    <el-form-item class="input" v-if="type!='info'"  label="赛事信息编号" prop="saishixinxiUuidNumber">
                        <el-input v-model="saishixinxiForm.saishixinxiUuidNumber"
                                  placeholder="赛事信息编号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="赛事信息编号" prop="saishixinxiUuidNumber">
                            <el-input v-model="ruleForm.saishixinxiUuidNumber"
                                      placeholder="赛事信息编号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='saishixinxi' ">
                    <el-form-item class="input" v-if="type!='info'"  label="比赛时间" prop="bisiaTime">
                        <el-input v-model="saishixinxiForm.bisiaTime"
                                  placeholder="比赛时间" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="比赛时间" prop="bisiaTime">
                            <el-input v-model="ruleForm.bisiaTime"
                                      placeholder="比赛时间" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12" v-if="sessionTable !='saishixinxi' ">
                    <el-form-item class="upload" v-if="type!='info' && !ro.saishixinxiPhoto" label="赛事照片" prop="saishixinxiPhoto">
                        <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (saishixinxiForm.saishixinxiPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.saishixinxiPhoto" label="赛事照片" prop="saishixinxiPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.saishixinxiPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='saishixinxi' ">
                    <el-form-item class="input" v-if="type!='info'"  label="主队" prop="saishixinxiZhudui">
                        <el-input v-model="saishixinxiForm.saishixinxiZhudui"
                                  placeholder="主队" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="主队" prop="saishixinxiZhudui">
                            <el-input v-model="ruleForm.saishixinxiZhudui"
                                      placeholder="主队" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='saishixinxi' ">
                    <el-form-item class="input" v-if="type!='info'"  label="客队" prop="saishixinxiKedui">
                        <el-input v-model="saishixinxiForm.saishixinxiKedui"
                                  placeholder="客队" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="客队" prop="saishixinxiKedui">
                            <el-input v-model="ruleForm.saishixinxiKedui"
                                      placeholder="客队" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='saishixinxi' ">
                    <el-form-item class="input" v-if="type!='info'"  label="比赛场地" prop="saishixinxiChangdi">
                        <el-input v-model="saishixinxiForm.saishixinxiChangdi"
                                  placeholder="比赛场地" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="比赛场地" prop="saishixinxiChangdi">
                            <el-input v-model="ruleForm.saishixinxiChangdi"
                                      placeholder="比赛场地" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='saishixinxi' ">
                    <el-form-item class="input" v-if="type!='info'"  label="阶段" prop="saishixinxiValue">
                        <el-input v-model="saishixinxiForm.saishixinxiValue"
                                  placeholder="阶段" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="阶段" prop="saishixinxiValue">
                            <el-input v-model="ruleForm.saishixinxiValue"
                                      placeholder="阶段" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='saishixinxi' ">
                    <el-form-item class="input" v-if="type!='info'"  label="胜利队伍" prop="shengliValue">
                        <el-input v-model="saishixinxiForm.shengliValue"
                                  placeholder="胜利队伍" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="胜利队伍" prop="shengliValue">
                            <el-input v-model="ruleForm.shengliValue"
                                      placeholder="胜利队伍" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <input id="updateId" name="id" type="hidden">
            <input id="saishixinxiId" name="saishixinxiId" type="hidden">
            <input id="qiuyuanId" name="qiuyuanId" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="赛事详情编号" prop="saishixinxiXiangqingUuidNumber">
                       <el-input v-model="ruleForm.saishixinxiXiangqingUuidNumber"
                                 placeholder="赛事详情编号" clearable  :readonly="ro.saishixinxiXiangqingUuidNumber"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="赛事详情编号" prop="saishixinxiXiangqingUuidNumber">
                           <el-input v-model="ruleForm.saishixinxiXiangqingUuidNumber"
                                     placeholder="赛事详情编号" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="标题" prop="saishixinxiXiangqingName">
                       <el-input v-model="ruleForm.saishixinxiXiangqingName"
                                 placeholder="标题" clearable  :readonly="ro.saishixinxiXiangqingName"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="标题" prop="saishixinxiXiangqingName">
                           <el-input v-model="ruleForm.saishixinxiXiangqingName"
                                     placeholder="标题" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="类型" prop="saishixinxiXiangqingTypes">
                        <el-select v-model="ruleForm.saishixinxiXiangqingTypes" :disabled="ro.saishixinxiXiangqingTypes" placeholder="请选择类型">
                            <el-option
                                v-for="(item,index) in saishixinxiXiangqingTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="类型" prop="saishixinxiXiangqingValue">
                        <el-input v-model="ruleForm.saishixinxiXiangqingValue"
                            placeholder="类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="upload" v-if="type!='info' && !ro.saishixinxiXiangqingFile" label="附件" prop="saishixinxiXiangqingFile">
                        <file-upload
                                tip="点击上传附件"
                                action="file/upload"
                                :limit="3"
                                :multiple="true"
                                :fileUrls="ruleForm.saishixinxiXiangqingFile?$base.url+ruleForm.saishixinxiXiangqingFile:''"
                                @change="saishixinxiXiangqingFileUploadChange"
                        ></file-upload>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.saishixinxiXiangqingFile" label="附件" prop="saishixinxiXiangqingFile">
                            <a type="text" style="text-decoration:none" class="el-button" :href="$base.url+ruleForm.saishixinxiXiangqingFile"  >附件下载</a>
                        </el-form-item>
                    </div>
                </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="分值" prop="saishixinxiXiangqingDefen">
                       <el-input v-model="ruleForm.saishixinxiXiangqingDefen"
                                 placeholder="分值" clearable  :readonly="ro.saishixinxiXiangqingDefen"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="分值" prop="saishixinxiXiangqingDefen">
                           <el-input v-model="ruleForm.saishixinxiXiangqingDefen"
                                     placeholder="分值" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item v-if="type!='info' && !ro.saishixinxiXiangqingTime"  class="input" label="发生时间" prop="saishixinxiXiangqingTime">
                        <el-date-picker
                                value-format="yyyy-MM-dd HH:mm:ss"
                                v-model="ruleForm.saishixinxiXiangqingTime"
                                type="datetime"
                                placeholder="发生时间"
                                :disabled="ro.saishixinxiXiangqingTime">
                        </el-date-picker>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.saishixinxiXiangqingTime" label="发生时间" prop="saishixinxiXiangqingTime">
                            <span v-html="ruleForm.saishixinxiXiangqingTime"></span>
                        </el-form-item>
                    </div>
                </el-col>

                <el-col :span="24">
                    <el-form-item v-if="type!='info' && !ro.saishixinxiXiangqingContent"  label="详情" prop="saishixinxiXiangqingContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.saishixinxiXiangqingContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.saishixinxiXiangqingContent" label="详情" prop="saishixinxiXiangqingContent">
                            <span v-html="ruleForm.saishixinxiXiangqingContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
            <el-form-item class="btn">
                <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
                <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
                <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import styleJs from "../../../utils/style.js";
    // 数字，邮件，手机，url，身份证校验
    import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
    import utilsJs, {getYearFormat,getMonthFormat,getDateFormat,getDatetimeFormat} from "../../../utils/utils.js";
    export default {
        data() {
            return {
                addEditForm:null,
                id: '',
                type: '',
                sessionTable : "",//登录账户所在表名
                role : "",//权限
                userId:"",//当前登录人的id
                qiuyuanForm: {},
                saishixinxiForm: {},
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
                },
                ruleForm: {
                    saishixinxiId: '',
                    qiuyuanId: '',
                    saishixinxiXiangqingUuidNumber: new Date().getTime(),
                    saishixinxiXiangqingName: '',
                    saishixinxiXiangqingTypes: '',
                    saishixinxiXiangqingFile: '',
                    saishixinxiXiangqingDefen: '',
                    saishixinxiXiangqingTime: '',
                    saishixinxiXiangqingContent: '',
                    insertTime: '',
                },
                saishixinxiXiangqingTypesOptions : [],
                qiuyuanOptions : [],
                saishixinxiOptions : [],
                rules: {
                   saishixinxiId: [
                              { required: true, message: '赛事信息不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   qiuyuanId: [
                              { required: true, message: '球员不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   saishixinxiXiangqingUuidNumber: [
                              { required: true, message: '赛事详情编号不能为空', trigger: 'blur' },
                          ],
                   saishixinxiXiangqingName: [
                              { required: true, message: '标题不能为空', trigger: 'blur' },
                          ],
                   saishixinxiXiangqingTypes: [
                              { required: true, message: '类型不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   saishixinxiXiangqingFile: [
                              { required: true, message: '附件不能为空', trigger: 'blur' },
                          ],
                   saishixinxiXiangqingDefen: [
                              { required: true, message: '分值不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   saishixinxiXiangqingTime: [
                              { required: true, message: '发生时间不能为空', trigger: 'blur' },
                          ],
                   saishixinxiXiangqingContent: [
                              { required: true, message: '详情不能为空', trigger: 'blur' },
                          ],
                   insertTime: [
                              { required: true, message: '上传时间不能为空', trigger: 'blur' },
                          ],
                }
            };
        },
        props: ["parent"],
        computed: {
        },
        created() {
            //获取当前登录用户的信息
            this.sessionTable = this.$storage.get("sessionTable");
            this.role = this.$storage.get("role");
            this.userId = this.$storage.get("userId");


            if (this.role != "管理员"){
            }else{
            }
            this.addEditForm = styleJs.addStyle();
            this.addEditStyleChange()
            this.addEditUploadStyleChange()
            //获取下拉框信息
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=saishixinxi_xiangqing_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.saishixinxiXiangqingTypesOptions = data.data.list;
                    }
                });

         this.$http({
             url: `qiuyuan/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.qiuyuanOptions = data.data.list;
            }
         });
         this.$http({
             url: `saishixinxi/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.saishixinxiOptions = data.data.list;
            }
         });

        },
        mounted() {
        },
        methods: {
            // 下载
            download(file){
                window.open(`${file}`)
            },
            // 初始化
            init(id,type) {
                if (id) {
                    this.id = id;
                    this.type = type;
                }
                if(this.type=='info'||this.type=='else'){
                    this.info(id);
                }
                // 获取用户信息
                this.$http({
                    url:`${this.$storage.get("sessionTable")}/session`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        var json = data.data;
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            qiuyuanChange(id){
                this.$http({
                    url: `qiuyuan/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.qiuyuanForm = data.data;
                    }
                });
            },
            saishixinxiChange(id){
                this.$http({
                    url: `saishixinxi/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.saishixinxiForm = data.data;
                    }
                });
            },
            // 多级联动参数
            info(id) {
                let _this =this;
                _this.$http({
                    url: `saishixinxiXiangqing/info/${id}`,
                    method: 'get'
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        _this.ruleForm = data.data;
                        _this.qiuyuanChange(data.data.qiuyuanId)
                        _this.saishixinxiChange(data.data.saishixinxiId)
                        _this.ruleForm.saishixinxiXiangqingContent = _this.ruleForm.saishixinxiXiangqingContent.replaceAll("src=\"upload/","src=\""+this.$base.url+"upload/");
                    } else {
                        _this.$message.error(data.msg);
                    }
                });
            },
            // 提交
            onSubmit() {
                this.$refs["ruleForm"].validate(valid => {
                    if (valid) {
                        this.ruleForm.saishixinxiXiangqingContent = this.ruleForm.saishixinxiXiangqingContent.replaceAll(this.$base.url,"");
                        this.$http({
                            url:`saishixinxiXiangqing/${!this.ruleForm.id ? "save" : "update"}`,
                            method: "post",
                            data: this.ruleForm
                        }).then(({ data }) => {
                            if (data && data.code === 0) {
                                this.$message({
                                    message: "操作成功",
                                    type: "success",
                                    duration: 1500,
                                    onClose: () => {
                                        this.parent.showFlag = true;
                                        this.parent.addOrUpdateFlag = false;
                                        this.parent.saishixinxiXiangqingCrossAddOrUpdateFlag = false;
                                        this.parent.search();
                                        this.parent.contentStyleChange();
                                    }
                                });
                            } else {
                                this.$message.error(data.msg);
                            }
                        });
                    }
                });
            },
            // 获取uuid
            getUUID () {
                return new Date().getTime();
            },
            // 返回
            back() {
                this.parent.showFlag = true;
                this.parent.addOrUpdateFlag = false;
                this.parent.saishixinxiXiangqingCrossAddOrUpdateFlag = false;
                this.parent.contentStyleChange();
            },
            //图片
            saishixinxiXiangqingFileUploadChange(fileUrls){
                this.ruleForm.saishixinxiXiangqingFile = fileUrls;
                this.addEditUploadStyleChange()
            },

            addEditStyleChange() {
                this.$nextTick(()=>{
                    // input
                    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputFontColor
                        el.style.fontSize = this.addEditForm.inputFontSize
                        el.style.borderWidth = this.addEditForm.inputBorderWidth
                        el.style.borderStyle = this.addEditForm.inputBorderStyle
                        el.style.borderColor = this.addEditForm.inputBorderColor
                        el.style.borderRadius = this.addEditForm.inputBorderRadius
                        el.style.backgroundColor = this.addEditForm.inputBgColor
                    })
                    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputLableColor
                        el.style.fontSize = this.addEditForm.inputLableFontSize
                    })
                    // select
                    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectFontColor
                        el.style.fontSize = this.addEditForm.selectFontSize
                        el.style.borderWidth = this.addEditForm.selectBorderWidth
                        el.style.borderStyle = this.addEditForm.selectBorderStyle
                        el.style.borderColor = this.addEditForm.selectBorderColor
                        el.style.borderRadius = this.addEditForm.selectBorderRadius
                        el.style.backgroundColor = this.addEditForm.selectBgColor
                    })
                    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectLableColor
                        el.style.fontSize = this.addEditForm.selectLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
                        el.style.color = this.addEditForm.selectIconFontColor
                        el.style.fontSize = this.addEditForm.selectIconFontSize
                    })
                    // date
                    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateFontColor
                        el.style.fontSize = this.addEditForm.dateFontSize
                        el.style.borderWidth = this.addEditForm.dateBorderWidth
                        el.style.borderStyle = this.addEditForm.dateBorderStyle
                        el.style.borderColor = this.addEditForm.dateBorderColor
                        el.style.borderRadius = this.addEditForm.dateBorderRadius
                        el.style.backgroundColor = this.addEditForm.dateBgColor
                    })
                    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateLableColor
                        el.style.fontSize = this.addEditForm.dateLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
                        el.style.color = this.addEditForm.dateIconFontColor
                        el.style.fontSize = this.addEditForm.dateIconFontSize
                        el.style.lineHeight = this.addEditForm.dateHeight
                    })
                    // upload
                    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
                    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.uploadHeight
                        el.style.color = this.addEditForm.uploadLableColor
                        el.style.fontSize = this.addEditForm.uploadLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
                        el.style.color = this.addEditForm.uploadIconFontColor
                        el.style.fontSize = this.addEditForm.uploadIconFontSize
                        el.style.lineHeight = iconLineHeight
                        el.style.display = 'block'
                    })
                    // 多文本输入框
                    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
                        el.style.height = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaFontColor
                        el.style.fontSize = this.addEditForm.textareaFontSize
                        el.style.borderWidth = this.addEditForm.textareaBorderWidth
                        el.style.borderStyle = this.addEditForm.textareaBorderStyle
                        el.style.borderColor = this.addEditForm.textareaBorderColor
                        el.style.borderRadius = this.addEditForm.textareaBorderRadius
                        el.style.backgroundColor = this.addEditForm.textareaBgColor
                    })
                    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
                        // el.style.lineHeight = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaLableColor
                        el.style.fontSize = this.addEditForm.textareaLableFontSize
                    })
                    // 保存
                    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
                        el.style.width = this.addEditForm.btnSaveWidth
                        el.style.height = this.addEditForm.btnSaveHeight
                        el.style.color = this.addEditForm.btnSaveFontColor
                        el.style.fontSize = this.addEditForm.btnSaveFontSize
                        el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
                        el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
                        el.style.borderColor = this.addEditForm.btnSaveBorderColor
                        el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnSaveBgColor
                    })
                    // 返回
                    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
                        el.style.width = this.addEditForm.btnCancelWidth
                        el.style.height = this.addEditForm.btnCancelHeight
                        el.style.color = this.addEditForm.btnCancelFontColor
                        el.style.fontSize = this.addEditForm.btnCancelFontSize
                        el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
                        el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
                        el.style.borderColor = this.addEditForm.btnCancelBorderColor
                        el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnCancelBgColor
                    })
                })
            },
            addEditUploadStyleChange() {
                this.$nextTick(()=>{
                    document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                })
            },
        }
    };
</script>
<style lang="scss">
.editor{
  height: 500px;

  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
	background-color: transparent;
}
.btn .el-button {
  padding: 0;
}</style>


import React from "react";

import { useGoogleLogin } from "react-google-login";
import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Line } from "components/Line";
import { List } from "components/List";
import { Input } from "components/Input";
import { Grid } from "components/Grid";

const JobseekerLandingPageDesktopPage = () => {
  const { signIn } = useGoogleLogin({
    onSuccess: (res) => {
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    accessType: "offline",
    cookiePolicy: "single_host_origin",
  });

  return (
    <>
      <Column className="bg-white_A700 font-ubuntu mx-[auto] w-[100%]">
        <Column className="items-center w-[100%]">
          <Stack className="lg:h-[641px] xl:h-[734px] h-[824px] 2xl:h-[825px] 3xl:h-[990px] w-[100%]">
            <Stack className="absolute lg:h-[641px] xl:h-[734px] h-[824px] 2xl:h-[825px] 3xl:h-[990px] inset-[0] w-[100%]">
              <Image
                src="img_maskgroup.png"
                className="absolute lg:h-[641px] xl:h-[734px] h-[824px] 2xl:h-[825px] 3xl:h-[990px] inset-[0] object-cover w-[100%]"
                alt="MaskGroup"
              />
              <header className="absolute top-[0] w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Row className="items-center justify-center xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:my-[36px] xl:my-[42px] my-[47.5px] 2xl:my-[47px] 3xl:my-[57px] w-[37%]">
                    <Row className="items-center justify-start w-[20%]">
                      <Image
                        src="img_ic.svg"
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] my-[1px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="ic"
                      />
                      <Text className="font-bold lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] text-amber_300 lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left">
                        <span className="text-white_A700 font-sora">
                          <>{`Jbs`}</>
                        </span>
                        <span className="text-amber_300 font-sora">
                          <>{`.me`}</>
                        </span>
                      </Text>
                    </Row>
                    <Row className="font-sora items-center justify-between lg:ml-[49px] xl:ml-[56px] ml-[64px] 3xl:ml-[76px] lg:my-[2px] my-[3.5px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] w-[68%]">
                      <Text className="cursor-pointer hover:font-semibold font-semibold text-amber_300 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`Home`}</Text>
                      <Text className="cursor-pointer font-normal hover:font-semibold not-italic hover:text-amber_300 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700_7f">{`Category`}</Text>
                      <Text className="cursor-pointer font-normal hover:font-semibold not-italic hover:text-amber_300 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700_7f">{`About Us`}</Text>
                      <Text className="cursor-pointer font-normal hover:font-semibold not-italic hover:text-amber_300 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700_7f">{`Contact`}</Text>
                    </Row>
                  </Row>
                  <Row className="font-sora items-center justify-center xl:mr-[106px] mr-[120px] 3xl:mr-[144px] lg:mr-[93px] lg:my-[28px] xl:my-[32px] my-[36px] 3xl:my-[43px] w-[15%]">
                    <Text className="font-semibold lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700">{`Login`}</Text>
                    <Button className="border-amber_300 border-bw05 border-solid font-semibold lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:py-[12px] xl:py-[14px] py-[16.205px] 2xl:py-[16px] 3xl:py-[19px] rounded-radius40 text-amber_300 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 w-[56%]">{`Sign Up`}</Button>
                  </Row>
                </Row>
              </header>
            </Stack>
            <Column className="absolute bottom-[10%] font-sora items-start justify-start left-[8%] w-[43%]">
              <Column className="w-[100%]">
                <Column className="w-[100%]">
                  <Column className="font-sora w-[100%]">
                    <Stack className="lg:h-[144px] xl:h-[164px] h-[184px] 2xl:h-[185px] 3xl:h-[221px] w-[100%]">
                      <div className="absolute bg-orange_300 bottom-[3%] 3xl:h-[100px] lg:h-[65px] xl:h-[74px] h-[83px] 2xl:h-[84px] right-[13%] rounded-radius64 w-[42%]"></div>
                      <Text className="absolute font-semibold inset-[0] 3xl:leading-lh110 lg:leading-lh71 xl:leading-lh81 2xl:leading-lh92 leading-lh9200 lg:text-fs56 xl:text-fs64 text-fs72 3xl:text-fs86 text-left text-white_A700 lg:tracking-ls3 tracking-ls36 2xl:tracking-ls4 xl:tracking-ls4 3xl:tracking-ls5 w-[100%]">
                        <span className="text-white_A700 font-sora">
                          <>
                            {`The best jobsite`}
                            <br />
                            {`for your    `}
                          </>
                        </span>
                        <span className="text-bluegray_900 font-sora">
                          <>{`future`}</>
                        </span>
                      </Text>
                    </Stack>
                  </Column>
                  <Text className="font-light font-opensans lg:leading-lh25 xl:leading-lh29 2xl:leading-lh33 leading-lh3300 3xl:leading-lh39 lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[100%]">{`We help you to find the best job to build your future and build a better future of digital era`}</Text>
                </Column>
              </Column>
              <Row className="items-center justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[43px] xl:mt-[49px] mt-[56px] 3xl:mt-[67px] w-[60%]">
                <Button
                  className="common-pointer border border-amber_300 border-solid font-semibold lg:py-[18px] xl:py-[20px] py-[23.375px] 2xl:py-[23px] 3xl:py-[28px] rounded-radius40 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 w-[54%]"
                  onClick={signIn}
                >{`Get It Now`}</Button>
                <Row className="items-center justify-between lg:ml-[37px] xl:ml-[42px] ml-[48px] 3xl:ml-[57px] lg:my-[15px] xl:my-[17px] my-[20px] 3xl:my-[24px] w-[33%]">
                  <Text className="font-semibold xl:my-[1px] lg:my-[1px] my-[2px] text-amber_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Learn more`}</Text>
                  <Image
                    src="img_arrowright.svg"
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="ArrowRight"
                  />
                </Row>
              </Row>
              <Text className="font-normal lg:leading-lh25 xl:leading-lh29 2xl:leading-lh33 leading-lh3300 3xl:leading-lh39 mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700_cc w-[34%]">{`Supported by 3k+ companies`}</Text>
              <Row className="font-montserrat items-center justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[92%]">
                <Row className="items-center justify-start mb-[1.95px] mt-[1.94px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] 3xl:my-[2px] w-[18%]">
                  <Image
                    src="img_ic_1.svg"
                    className="lg:h-[21px] xl:h-[24px] h-[26.32px] 2xl:h-[27px] 3xl:h-[32px] mt-[1px] object-contain w-[38%]"
                    alt="ic"
                  />
                  <Text className="font-medium mb-[1px] lg:ml-[4px] xl:ml-[5px] ml-[6.34px] 2xl:ml-[6px] 3xl:ml-[7px] lg:text-fs17 xl:text-fs19 2xl:text-fs22 text-fs2218140411376953 3xl:text-fs26 text-left text-white_A700_7f">{`Meta`}</Text>
                </Row>
                <Image
                  src="img_ic_2.svg"
                  className="lg:h-[25px] xl:h-[28px] h-[30.9px] 2xl:h-[31px] 3xl:h-[38px] lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] my-[1px] object-contain w-[17%]"
                  alt="ic"
                />
                <Row className="font-worksans items-start justify-center lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] xl:my-[1px] lg:my-[1px] my-[2px] w-[18%]">
                  <Text className="font-semibold lg:text-fs17 xl:text-fs19 2xl:text-fs22 text-fs2218140411376953 3xl:text-fs26 text-left text-white_A700_7f">{`Linked`}</Text>
                  <Image
                    src="img_ic_3.svg"
                    className="lg:h-[19px] xl:h-[22px] h-[23.77px] 2xl:h-[24px] 3xl:h-[29px] mb-[2.85px] 2xl:mb-[2px] xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] ml-[1px] mt-[1px] object-contain lg:w-[18px] xl:w-[21px] w-[23.77px] 2xl:w-[23px] 3xl:w-[28px]"
                    alt="ic"
                  />
                </Row>
                <Image
                  src="img_ic_4.svg"
                  className="lg:h-[21px] xl:h-[24px] h-[26.46px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] lg:my-[1px] my-[2.27px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] object-contain w-[18%]"
                  alt="ic"
                />
              </Row>
            </Column>
          </Stack>
          <Row className="bg-indigo_800 font-sora items-center justify-start w-[100%]">
            <Column className="items-start lg:ml-[167px] xl:ml-[191px] ml-[215px] 3xl:ml-[258px] lg:my-[39px] xl:my-[44px] my-[50.5px] 2xl:my-[50px] 3xl:my-[60px] w-[11%]">
              <Text className="font-semibold xl:mx-[2px] lg:mx-[2px] mx-[3px] lg:text-fs43 xl:text-fs49 text-fs56 3xl:text-fs67 text-left text-white_A700">
                <span className="text-white_A700 font-sora">
                  <>{`1,9`}</>
                </span>
                <span className="text-orange_300 font-sora">
                  <>{`K+`}</>
                </span>
              </Text>
              <Text className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700_b2">{`Ready Job Vacancy`}</Text>
            </Column>
            <Line className="bg-white_A700_4c 3xl:h-[116px] lg:h-[75px] xl:h-[86px] h-[96px] 2xl:h-[97px] xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:my-[40px] xl:my-[46px] my-[52px] 3xl:my-[62px] w-[1px]" />
            <Column className="items-center xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:my-[39px] xl:my-[44px] my-[50.5px] 2xl:my-[50px] 3xl:my-[60px] w-[13%]">
              <Text className="font-semibold lg:text-fs43 xl:text-fs49 text-fs56 3xl:text-fs67 text-left text-white_A700">
                <span className="text-white_A700 font-sora">
                  <>{`276`}</>
                </span>
                <span className="text-orange_300 font-sora">
                  <>{`K+`}</>
                </span>
              </Text>
              <Text className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] xl:mx-[11px] mx-[12.5px] 2xl:mx-[12px] 3xl:mx-[15px] lg:mx-[9px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700_b2">{`Job Seekers Active`}</Text>
            </Column>
            <Line className="bg-white_A700_4c 3xl:h-[116px] lg:h-[75px] xl:h-[86px] h-[96px] 2xl:h-[97px] xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:my-[40px] xl:my-[46px] my-[52px] 3xl:my-[62px] w-[1px]" />
            <Column className="items-center xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:my-[39px] xl:my-[44px] my-[50.5px] 2xl:my-[50px] 3xl:my-[60px] w-[13%]">
              <Text className="font-semibold lg:mx-[10px] xl:mx-[12px] mx-[14px] 3xl:mx-[16px] lg:text-fs43 xl:text-fs49 text-fs56 3xl:text-fs67 text-left text-white_A700">
                <span className="text-white_A700 font-sora">
                  <>{`3,4`}</>
                </span>
                <span className="text-orange_300 font-sora">
                  <>{`K+`}</>
                </span>
              </Text>
              <Text className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700_b2">{`Incorporated Company`}</Text>
            </Column>
          </Row>
          <Column className="font-sora items-center justify-center lg:mt-[37px] xl:mt-[42px] mt-[48px] 3xl:mt-[57px] lg:py-[37px] xl:py-[42px] py-[48px] 3xl:py-[57px] w-[100%]">
            <Column className="mx-[auto] w-[42%]">
              <Text className="font-semibold lg:leading-lh50 xl:leading-lh57 2xl:leading-lh65 leading-lh6500 3xl:leading-lh78 text-bluegray_900 text-center lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 tracking-ls2 w-[100%]">{`More easier to find a job with our platform`}</Text>
              <Text className="font-light leading-lh18000 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] text-bluegray_901 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 w-[100%]">{`The following features make our service easier to help you find suitable jobs from various companies`}</Text>
            </Column>
            <List
              className="lg:gap-[62px] xl:gap-[71px] gap-[80px] 3xl:gap-[96px] grid grid-cols-3 min-h-[auto] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] mx-[auto] w-[70%]"
              orientation="horizontal"
            >
              <Column className="items-center justify-start w-[100%]">
                <div className="bg-gray_300 lg:h-[112px] xl:h-[129px] h-[144px] 2xl:h-[145px] 3xl:h-[173px] mx-[auto] rounded-radius100 lg:w-[112px] xl:w-[128px] w-[144px] 3xl:w-[172px]"></div>
                <Column className="lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Text className="font-semibold mx-[auto] text-bluegray_900 text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28">{`Easy Applying`}</Text>
                  <Text className="font-light lg:leading-lh20 xl:leading-lh23 2xl:leading-lh26 leading-lh2600 3xl:leading-lh31 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] text-bluegray_901 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 w-[100%]">{`The process of applying for a job is  easier and faster`}</Text>
                </Column>
              </Column>
              <Column className="items-center justify-start w-[100%]">
                <div className="bg-gray_300 lg:h-[112px] xl:h-[129px] h-[144px] 2xl:h-[145px] 3xl:h-[173px] mx-[auto] rounded-radius100 lg:w-[112px] xl:w-[128px] w-[144px] 3xl:w-[172px]"></div>
                <Column className="lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Text className="font-semibold mx-[auto] text-bluegray_900 text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28">{`Many Vacancies`}</Text>
                  <Text className="font-light lg:leading-lh20 xl:leading-lh23 2xl:leading-lh26 leading-lh2600 3xl:leading-lh31 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] text-bluegray_901 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 w-[100%]">{`There are many job vacancies from various companies`}</Text>
                </Column>
              </Column>
              <Column className="items-center justify-start w-[100%]">
                <div className="bg-gray_300 lg:h-[112px] xl:h-[129px] h-[144px] 2xl:h-[145px] 3xl:h-[173px] mx-[auto] rounded-radius100 lg:w-[112px] xl:w-[128px] w-[144px] 3xl:w-[172px]"></div>
                <Column className="lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Text className="font-semibold mx-[auto] text-bluegray_900 text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28">{`Best Support`}</Text>
                  <Text className="font-light lg:leading-lh20 xl:leading-lh23 2xl:leading-lh26 leading-lh2600 3xl:leading-lh31 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] text-bluegray_901 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 w-[100%]">
                    {
                      <>
                        {`We provide full support for job seekers `}
                        <br />
                        {`for better results`}
                      </>
                    }
                  </Text>
                </Column>
              </Column>
            </List>
          </Column>
          <Column className="font-sora items-center justify-center lg:mt-[37px] xl:mt-[42px] mt-[48px] 3xl:mt-[57px] lg:py-[37px] xl:py-[42px] py-[48px] 3xl:py-[57px] w-[100%]">
            <Column className="mx-[auto] w-[45%]">
              <Text className="font-semibold mx-[auto] text-bluegray_900 text-center lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 tracking-ls2">{`Looking for a job now`}</Text>
              <Text className="font-light lg:leading-lh25 xl:leading-lh29 2xl:leading-lh33 leading-lh3300 3xl:leading-lh39 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] text-bluegray_901 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 w-[100%]">{`Type in the name of the position, company or job category you are looking for`}</Text>
            </Column>
            <Row className="bg-white_A700 border border-indigo_200 border-solid items-center justify-center lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] mx-[auto] rounded-radius80 w-[55%]">
              <Image
                src="img_frame28.svg"
                className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] object-contain rounded-radius40 w-[48px]"
                alt="Frame28"
              />
              <Row className="items-center justify-center xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] w-[38%]">
                <Text className="font-normal lg:leading-lh25 xl:leading-lh29 2xl:leading-lh33 leading-lh3300 3xl:leading-lh39 lg:my-[5px] xl:my-[6px] my-[7.5px] 2xl:my-[7px] 3xl:my-[9px] not-italic text-bluegray_400 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[68%]">{`Category`}</Text>
                <Line className="bg-gray_300 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:my-[3px] lg:my-[3px] my-[4px] w-[1px]" />
                <Image
                  src="img_frame28_1.svg"
                  className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain rounded-radius40 w-[48px]"
                  alt="Frame28"
                />
              </Row>
              <Text className="font-normal lg:leading-lh25 xl:leading-lh29 2xl:leading-lh33 leading-lh3300 3xl:leading-lh39 xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:my-[18px] xl:my-[20px] my-[23.5px] 2xl:my-[23px] 3xl:my-[28px] not-italic text-bluegray_400 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[26%]">{`Location`}</Text>
              <Row className="bg-indigo_800 items-center justify-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] rounded-radius40 w-[20%]">
                <Image
                  src="img_magnifyingglass.svg"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[26px] xl:ml-[29px] ml-[33.5px] 2xl:ml-[33px] 3xl:ml-[40px] lg:my-[15px] xl:my-[17px] my-[20px] 3xl:my-[24px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="MagnifyingGlass"
                />
                <Text className="font-normal lg:leading-lh25 xl:leading-lh29 2xl:leading-lh33 leading-lh3300 3xl:leading-lh39 xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mr-[26px] xl:mr-[29px] mr-[33.5px] 2xl:mr-[33px] 3xl:mr-[40px] lg:my-[12px] xl:my-[13px] my-[15.5px] 2xl:my-[15px] 3xl:my-[18px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 w-[36%]">{`Search`}</Text>
              </Row>
            </Row>
            <Column className="lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] mx-[auto] w-[71%]">
              <Text className="font-normal mx-[auto] not-italic text-bluegray_901 text-center lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24">{`Popular category:`}</Text>
              <Column className="items-center justify-start lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Stack className="lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] w-[23%]">
                    <Input
                      className="absolute placeholder:bg-transparent bg-transparent border border-indigo_200 border-solid font-normal inset-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[12px] xl:py-[13px] py-[15.705px] 2xl:py-[15px] 3xl:py-[18px] rounded-radius40 placeholder:text-bluegray_900 text-bluegray_900 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[100%]"
                      name="Full Stack Deve"
                      placeholder={`Full Stack Developer`}
                    ></Input>
                    <Button className="absolute bg-indigo_800 font-semibold h-[max-content] inset-y-[0] my-[auto] lg:py-[5px] xl:py-[6px] py-[7.03px] 2xl:py-[7px] 3xl:py-[8px] right-[5%] rounded-radius100 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-white_A700 w-[19%]">{`324`}</Button>
                  </Stack>
                  <Stack className="lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] w-[19%]">
                    <Input
                      className="absolute placeholder:bg-transparent bg-transparent border border-indigo_200 border-solid font-normal inset-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[12px] xl:py-[13px] py-[15.705px] 2xl:py-[15px] 3xl:py-[18px] rounded-radius40 placeholder:text-bluegray_900 text-bluegray_900 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[100%]"
                      name="UI/UX Designer"
                      placeholder={`UI/UX Designer`}
                    ></Input>
                    <Button className="absolute bg-indigo_800 font-semibold h-[max-content] inset-y-[0] my-[auto] lg:py-[5px] xl:py-[6px] py-[7.03px] 2xl:py-[7px] 3xl:py-[8px] right-[6%] rounded-radius100 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-white_A700 w-[23%]">{`259`}</Button>
                  </Stack>
                  <Stack className="lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] w-[18%]">
                    <Input
                      className="absolute placeholder:bg-transparent bg-transparent border border-indigo_200 border-solid font-normal inset-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[12px] xl:py-[13px] py-[15.705px] 2xl:py-[15px] 3xl:py-[18px] rounded-radius40 placeholder:text-bluegray_900 text-bluegray_900 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[100%]"
                      name="IOS Developer"
                      placeholder={`IOS Developer`}
                    ></Input>
                    <Button className="absolute bg-indigo_800 font-semibold h-[max-content] inset-y-[0] my-[auto] lg:py-[5px] xl:py-[6px] py-[7.03px] 2xl:py-[7px] 3xl:py-[8px] right-[6%] rounded-radius100 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-white_A700 w-[22%]">{`231`}</Button>
                  </Stack>
                  <Stack className="lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] w-[19%]">
                    <Input
                      className="absolute placeholder:bg-transparent bg-transparent border border-indigo_200 border-solid font-normal inset-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[12px] xl:py-[13px] py-[15.705px] 2xl:py-[15px] 3xl:py-[18px] rounded-radius40 placeholder:text-bluegray_900 text-bluegray_900 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[100%]"
                      name="Web Developer"
                      placeholder={`Web Developer`}
                    ></Input>
                    <Button className="absolute bg-indigo_800 font-semibold h-[max-content] inset-y-[0] my-[auto] lg:py-[5px] xl:py-[6px] py-[7.03px] 2xl:py-[7px] 3xl:py-[8px] right-[6%] rounded-radius100 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-white_A700 w-[22%]">{`222`}</Button>
                  </Stack>
                  <Stack className="lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] w-[16%]">
                    <Input
                      className="absolute placeholder:bg-transparent bg-transparent border border-indigo_200 border-solid font-normal inset-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[12px] xl:py-[13px] py-[15.705px] 2xl:py-[15px] 3xl:py-[18px] rounded-radius40 placeholder:text-bluegray_900 text-bluegray_900 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[100%]"
                      name="Copywriter"
                      placeholder={`Copywriter`}
                    ></Input>
                    <Button className="absolute bg-indigo_800 font-semibold h-[max-content] inset-y-[0] my-[auto] lg:py-[5px] xl:py-[6px] py-[7.03px] 2xl:py-[7px] 3xl:py-[8px] right-[7%] rounded-radius100 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-white_A700 w-[25%]">{`219`}</Button>
                  </Stack>
                </Row>
                <Row className="items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] mx-[auto] w-[91%]">
                  <Stack className="lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] w-[22%]">
                    <Input
                      className="absolute placeholder:bg-transparent bg-transparent border border-indigo_200 border-solid font-normal inset-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[12px] xl:py-[13px] py-[15.705px] 2xl:py-[15px] 3xl:py-[18px] rounded-radius40 placeholder:text-bluegray_900 text-bluegray_900 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[100%]"
                      name="Graphic Designe"
                      placeholder={`Graphic Designer`}
                    ></Input>
                    <Button className="absolute bg-indigo_800 font-semibold h-[max-content] inset-y-[0] my-[auto] lg:py-[5px] xl:py-[6px] py-[7.03px] 2xl:py-[7px] 3xl:py-[8px] right-[6%] rounded-radius100 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-white_A700 w-[20%]">{`192`}</Button>
                  </Stack>
                  <Stack className="lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[16%]">
                    <Input
                      className="absolute placeholder:bg-transparent bg-transparent border border-indigo_200 border-solid font-normal inset-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[12px] xl:py-[13px] py-[15.705px] 2xl:py-[15px] 3xl:py-[18px] rounded-radius40 placeholder:text-bluegray_900 text-bluegray_900 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[100%]"
                      name="Illustrator"
                      placeholder={`Illustrator`}
                    ></Input>
                    <Button className="absolute bg-indigo_800 font-semibold h-[max-content] inset-y-[0] my-[auto] lg:py-[5px] xl:py-[6px] py-[7.03px] 2xl:py-[7px] 3xl:py-[8px] right-[8%] rounded-radius100 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-white_A700 w-[27%]">{`176`}</Button>
                  </Stack>
                  <Stack className="lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[19%]">
                    <Input
                      className="absolute placeholder:bg-transparent bg-transparent border border-indigo_200 border-solid font-normal inset-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[12px] xl:py-[13px] py-[15.705px] 2xl:py-[15px] 3xl:py-[18px] rounded-radius40 placeholder:text-bluegray_900 text-bluegray_900 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[100%]"
                      name="Video Editor"
                      placeholder={`Video Editor`}
                    ></Input>
                    <Button className="absolute bg-indigo_800 font-semibold h-[max-content] inset-y-[0] my-[auto] lg:py-[5px] xl:py-[6px] py-[7.03px] 2xl:py-[7px] 3xl:py-[8px] right-[7%] rounded-radius100 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-white_A700 w-[24%]">{`154`}</Button>
                  </Stack>
                  <Stack className="lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[20%]">
                    <Input
                      className="absolute placeholder:bg-transparent bg-transparent border border-indigo_200 border-solid font-normal inset-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[12px] xl:py-[13px] py-[15.705px] 2xl:py-[15px] 3xl:py-[18px] rounded-radius40 placeholder:text-bluegray_900 text-bluegray_900 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[100%]"
                      name="Front End Dev"
                      placeholder={`Front End Dev`}
                    ></Input>
                    <Button className="absolute bg-indigo_800 font-semibold h-[max-content] inset-y-[0] my-[auto] lg:py-[5px] xl:py-[6px] py-[7.03px] 2xl:py-[7px] 3xl:py-[8px] right-[7%] rounded-radius100 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-white_A700 w-[23%]">{`142`}</Button>
                  </Stack>
                  <Stack className="lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[18%]">
                    <Input
                      className="absolute placeholder:bg-transparent bg-transparent border border-indigo_200 border-solid font-normal inset-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[12px] xl:py-[13px] py-[15.705px] 2xl:py-[15px] 3xl:py-[18px] rounded-radius40 placeholder:text-bluegray_900 text-bluegray_900 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[100%]"
                      name="3D Modeler"
                      placeholder={`3D Modeler`}
                    ></Input>
                    <Button className="absolute bg-indigo_800 font-semibold h-[max-content] inset-y-[0] my-[auto] lg:py-[5px] xl:py-[6px] py-[7.03px] 2xl:py-[7px] 3xl:py-[8px] right-[7%] rounded-radius100 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-white_A700 w-[25%]">{`128`}</Button>
                  </Stack>
                </Row>
                <Row className="items-center justify-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] mx-[auto] w-[69%]">
                  <Stack className="lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] w-[19%]">
                    <Input
                      className="absolute placeholder:bg-transparent bg-transparent border border-indigo_200 border-solid font-normal inset-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[12px] xl:py-[13px] py-[15.705px] 2xl:py-[15px] 3xl:py-[18px] rounded-radius40 placeholder:text-bluegray_900 text-bluegray_900 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[100%]"
                      name="Officer"
                      placeholder={`Officer`}
                    ></Input>
                    <Button className="absolute bg-indigo_800 font-semibold h-[max-content] inset-y-[0] my-[auto] lg:py-[5px] xl:py-[6px] py-[7.03px] 2xl:py-[7px] 3xl:py-[8px] right-[9%] rounded-radius100 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-white_A700 w-[32%]">{`102`}</Button>
                  </Stack>
                  <Stack className="lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[28%]">
                    <Input
                      className="absolute placeholder:bg-transparent bg-transparent border border-indigo_200 border-solid font-normal inset-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[12px] xl:py-[13px] py-[15.705px] 2xl:py-[15px] 3xl:py-[18px] rounded-radius40 placeholder:text-bluegray_900 text-bluegray_900 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[100%]"
                      name="Content Creator"
                      placeholder={`Content Creator`}
                    ></Input>
                    <Button className="absolute bg-indigo_800 font-semibold h-[max-content] inset-y-[0] my-[auto] lg:py-[5px] xl:py-[6px] py-[7.03px] 2xl:py-[7px] 3xl:py-[8px] right-[6%] rounded-radius100 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-white_A700 w-[18%]">{`95`}</Button>
                  </Stack>
                  <Stack className="lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[21%]">
                    <Input
                      className="absolute placeholder:bg-transparent bg-transparent border border-indigo_200 border-solid font-normal inset-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[12px] xl:py-[13px] py-[15.705px] 2xl:py-[15px] 3xl:py-[18px] rounded-radius40 placeholder:text-bluegray_900 text-bluegray_900 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[100%]"
                      name="Translator"
                      placeholder={`Translator`}
                    ></Input>
                    <Button className="absolute bg-indigo_800 font-semibold h-[max-content] inset-y-[0] my-[auto] lg:py-[5px] xl:py-[6px] py-[7.03px] 2xl:py-[7px] 3xl:py-[8px] right-[8%] rounded-radius100 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-white_A700 w-[23%]">{`72`}</Button>
                  </Stack>
                  <Stack className="lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[27%]">
                    <Input
                      className="absolute placeholder:bg-transparent bg-transparent border border-indigo_200 border-solid font-normal inset-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[12px] xl:py-[13px] py-[15.705px] 2xl:py-[15px] 3xl:py-[18px] rounded-radius40 placeholder:text-bluegray_900 text-bluegray_900 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[100%]"
                      name="Java Developer"
                      placeholder={`Java Developer`}
                    ></Input>
                    <Button className="absolute bg-indigo_800 font-semibold h-[max-content] inset-y-[0] my-[auto] lg:py-[5px] xl:py-[6px] py-[7.03px] 2xl:py-[7px] 3xl:py-[8px] right-[6%] rounded-radius100 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-white_A700 w-[18%]">{`51`}</Button>
                  </Stack>
                </Row>
              </Column>
            </Column>
            <Row className="items-center justify-center lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] mx-[auto] w-[11%]">
              <Text className="font-normal xl:my-[1px] lg:my-[1px] my-[2px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_800 text-left">{`More categories`}</Text>
              <Image
                src="img_arrowright_1.svg"
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="ArrowRight"
              />
            </Row>
          </Column>
          <Column className="bg-gray_100 font-sora items-center justify-center lg:mt-[37px] xl:mt-[42px] mt-[48px] 3xl:mt-[57px] lg:py-[62px] xl:py-[71px] py-[80px] 3xl:py-[96px] w-[100%]">
            <Row className="items-end justify-between mx-[auto] w-[83%]">
              <Column className="w-[53%]">
                <Text className="font-semibold text-bluegray_900 lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-left tracking-ls2">{`Choose Our Available Jobs`}</Text>
                <Text className="font-light lg:leading-lh25 xl:leading-lh29 2xl:leading-lh33 leading-lh3300 3xl:leading-lh39 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] text-bluegray_901 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[100%]">{`Find the following job that suits you and apply now`}</Text>
              </Column>
              <Row className="lg:gap-[6px] xl:gap-[7px] gap-[8px] 3xl:gap-[9px] grid grid-cols-2 items-center justify-between lg:mt-[51px] xl:mt-[58px] mt-[66px] 3xl:mt-[79px] w-[21%]">
                <Button className="bg-indigo_800 font-normal not-italic lg:py-[13px] xl:py-[15px] py-[17px] 3xl:py-[20px] rounded-radius40 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 w-[100%]">{`Recent`}</Button>
                <Button className="bg-white_A700 font-normal not-italic lg:py-[13px] xl:py-[15px] py-[17px] 3xl:py-[20px] rounded-radius40 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-indigo_800 w-[100%]">{`Popular`}</Button>
              </Row>
            </Row>
            <Grid className="lg:gap-[18px] xl:gap-[21px] gap-[24px] 3xl:gap-[28px] grid grid-cols-3 lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] mx-[auto] w-[83%]">
              <Column className="bg-white_A700 items-start justify-start rounded-radius20 shadow-bs w-[100%]">
                <Row className="items-center justify-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[55%]">
                  <div className="bg-gray_101 lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius40 lg:w-[43px] xl:w-[49px] w-[56px] 3xl:w-[67px]"></div>
                  <Column className="items-start lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:my-[1px] lg:my-[1px] my-[2px] w-[66%]">
                    <Text className="font-semibold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-bluegray_901 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left">{`Microsoft`}</Text>
                    <Column className="font-poppins lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Image
                          src="img_mappin.svg"
                          className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:my-[1px] my-[2.5px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                          alt="MapPin"
                        />
                        <Text className="font-normal not-italic text-bluegray_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`Washington, USA`}</Text>
                      </Row>
                    </Column>
                  </Column>
                </Row>
                <Column className="items-center lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Line className="bg-gray_300_7f h-[1px] mx-[auto] w-[90%]" />
                </Column>
                <Text className="font-semibold lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] text-bluegray_901 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left">{`Senior UX Designer`}</Text>
                <Row className="font-poppins items-center justify-start lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[40%]">
                  <Row className="items-center justify-start w-[50%]">
                    <div className="bg-orange_300 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] xl:my-[5px] lg:my-[5px] my-[6.5px] 2xl:my-[6px] 3xl:my-[7px] rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"></div>
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`Full Time`}</Text>
                  </Row>
                  <Row className="items-center justify-start lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] w-[40%]">
                    <div className="bg-orange_300 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] xl:my-[5px] lg:my-[5px] my-[6.5px] 2xl:my-[6px] 3xl:my-[7px] rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"></div>
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`Onsite`}</Text>
                  </Row>
                </Row>
                <Column className="items-center lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Row className="items-center justify-between mx-[auto] w-[90%]">
                    <Text className="font-medium font-ubuntu 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] lg:text-fs17 xl:text-fs19 text-fs22 3xl:text-fs26 text-gray_301 text-left">
                      <span className="text-indigo_800 text-fs24 font-sora font-semibold lg:text-fs18 xl:text-fs21 3xl:text-fs28">
                        <>{`$2500`}</>
                      </span>
                      <span className="text-bluegray_400 text-fs16 font-sora font-normal lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                        <>{`/month`}</>
                      </span>
                    </Text>
                    <Button className="bg-indigo_800 font-normal font-sora not-italic lg:py-[13px] xl:py-[15px] py-[17px] 3xl:py-[20px] rounded-radius40 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 w-[35%]">{`Apply Now`}</Button>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-start justify-start rounded-radius20 shadow-bs w-[100%]">
                <Row className="items-center justify-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[58%]">
                  <div className="bg-gray_101 lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius40 lg:w-[43px] xl:w-[49px] w-[56px] 3xl:w-[67px]"></div>
                  <Column className="items-start lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:my-[1px] lg:my-[1px] my-[2px] w-[68%]">
                    <Text className="font-semibold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-bluegray_901 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left">{`Slack`}</Text>
                    <Column className="font-poppins lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Image
                          src="img_mappin.svg"
                          className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:my-[1px] my-[2.5px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                          alt="MapPin"
                        />
                        <Text className="font-normal not-italic text-bluegray_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`San Francisco, USA`}</Text>
                      </Row>
                    </Column>
                  </Column>
                </Row>
                <Column className="items-center lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Line className="bg-gray_300_7f h-[1px] mx-[auto] w-[90%]" />
                </Column>
                <Text className="font-semibold lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] text-bluegray_901 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left">{`Java Programmer`}</Text>
                <Row className="font-poppins items-center justify-start lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[40%]">
                  <Row className="items-center justify-start w-[50%]">
                    <div className="bg-orange_300 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] xl:my-[5px] lg:my-[5px] my-[6.5px] 2xl:my-[6px] 3xl:my-[7px] rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"></div>
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`Full Time`}</Text>
                  </Row>
                  <Row className="items-center justify-start lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] w-[40%]">
                    <div className="bg-orange_300 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] xl:my-[5px] lg:my-[5px] my-[6.5px] 2xl:my-[6px] 3xl:my-[7px] rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"></div>
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`Onsite`}</Text>
                  </Row>
                </Row>
                <Column className="items-center lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Row className="items-center justify-between mx-[auto] w-[90%]">
                    <Text className="font-medium font-ubuntu 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] lg:text-fs17 xl:text-fs19 text-fs22 3xl:text-fs26 text-gray_301 text-left">
                      <span className="text-indigo_800 text-fs24 font-sora font-semibold lg:text-fs18 xl:text-fs21 3xl:text-fs28">
                        <>{`$3000`}</>
                      </span>
                      <span className="text-bluegray_400 text-fs16 font-sora font-normal lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                        <>{`/month`}</>
                      </span>
                    </Text>
                    <Button className="bg-indigo_800 font-normal font-sora not-italic lg:py-[13px] xl:py-[15px] py-[17px] 3xl:py-[20px] rounded-radius40 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 w-[35%]">{`Apply Now`}</Button>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-start justify-start rounded-radius20 shadow-bs w-[100%]">
                <Row className="items-center justify-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[49%]">
                  <div className="bg-gray_102 lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius40 lg:w-[43px] xl:w-[49px] w-[56px] 3xl:w-[67px]"></div>
                  <Column className="items-start lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:my-[1px] lg:my-[1px] my-[2px] w-[62%]">
                    <Text className="font-semibold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-bluegray_901 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left">{`Adobe Inc`}</Text>
                    <Column className="font-poppins lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Image
                          src="img_mappin.svg"
                          className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:my-[1px] my-[2.5px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                          alt="MapPin"
                        />
                        <Text className="font-normal not-italic text-bluegray_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`San Jose, USA`}</Text>
                      </Row>
                    </Column>
                  </Column>
                </Row>
                <Column className="items-center lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Line className="bg-gray_300_7f h-[1px] mx-[auto] w-[90%]" />
                </Column>
                <Text className="font-semibold lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] text-bluegray_901 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left">{`IOS Developer`}</Text>
                <Row className="font-poppins items-center justify-start lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[40%]">
                  <Row className="items-center justify-start w-[50%]">
                    <div className="bg-orange_300 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] xl:my-[5px] lg:my-[5px] my-[6.5px] 2xl:my-[6px] 3xl:my-[7px] rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"></div>
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`Full Time`}</Text>
                  </Row>
                  <Row className="items-center justify-start lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] w-[40%]">
                    <div className="bg-orange_300 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] xl:my-[5px] lg:my-[5px] my-[6.5px] 2xl:my-[6px] 3xl:my-[7px] rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"></div>
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`Onsite`}</Text>
                  </Row>
                </Row>
                <Column className="items-center lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Row className="items-center justify-between mx-[auto] w-[90%]">
                    <Text className="font-medium font-ubuntu 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] lg:text-fs17 xl:text-fs19 text-fs22 3xl:text-fs26 text-gray_301 text-left">
                      <span className="text-indigo_800 text-fs24 font-sora font-semibold lg:text-fs18 xl:text-fs21 3xl:text-fs28">
                        <>{`$3500`}</>
                      </span>
                      <span className="text-bluegray_400 text-fs16 font-sora font-normal lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                        <>{`/month`}</>
                      </span>
                    </Text>
                    <Button className="bg-indigo_800 font-normal font-sora not-italic lg:py-[13px] xl:py-[15px] py-[17px] 3xl:py-[20px] rounded-radius40 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 w-[35%]">{`Apply Now`}</Button>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-start justify-start rounded-radius20 shadow-bs w-[100%]">
                <Row className="items-center justify-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[54%]">
                  <div className="bg-gray_102 lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius40 lg:w-[43px] xl:w-[49px] w-[56px] 3xl:w-[67px]"></div>
                  <Column className="items-start lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:my-[1px] lg:my-[1px] my-[2px] w-[65%]">
                    <Text className="font-semibold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-bluegray_901 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left">{`Google`}</Text>
                    <Column className="font-poppins lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Image
                          src="img_mappin.svg"
                          className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:my-[1px] my-[2.5px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                          alt="MapPin"
                        />
                        <Text className="font-normal not-italic text-bluegray_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`Cambridge, USA`}</Text>
                      </Row>
                    </Column>
                  </Column>
                </Row>
                <Column className="items-center lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Line className="bg-gray_300_7f h-[1px] mx-[auto] w-[90%]" />
                </Column>
                <Text className="font-semibold lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] text-bluegray_901 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left">{`Product Designer`}</Text>
                <Row className="font-poppins items-center justify-start lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[40%]">
                  <Row className="items-center justify-start w-[50%]">
                    <div className="bg-orange_300 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] xl:my-[5px] lg:my-[5px] my-[6.5px] 2xl:my-[6px] 3xl:my-[7px] rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"></div>
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`Full Time`}</Text>
                  </Row>
                  <Row className="items-center justify-start lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] w-[40%]">
                    <div className="bg-orange_300 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] xl:my-[5px] lg:my-[5px] my-[6.5px] 2xl:my-[6px] 3xl:my-[7px] rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"></div>
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`Onsite`}</Text>
                  </Row>
                </Row>
                <Column className="items-center lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Row className="items-center justify-between mx-[auto] w-[90%]">
                    <Text className="font-medium font-ubuntu 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] lg:text-fs17 xl:text-fs19 text-fs22 3xl:text-fs26 text-gray_301 text-left">
                      <span className="text-indigo_800 text-fs24 font-sora font-semibold lg:text-fs18 xl:text-fs21 3xl:text-fs28">
                        <>{`$2800`}</>
                      </span>
                      <span className="text-bluegray_400 text-fs16 font-sora font-normal lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                        <>{`/month`}</>
                      </span>
                    </Text>
                    <Button className="bg-indigo_800 font-normal font-sora not-italic lg:py-[13px] xl:py-[15px] py-[17px] 3xl:py-[20px] rounded-radius40 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 w-[35%]">{`Apply Now`}</Button>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-start justify-start rounded-radius20 shadow-bs w-[100%]">
                <Row className="items-center justify-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[57%]">
                  <div className="bg-gray_102 lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius40 lg:w-[43px] xl:w-[49px] w-[56px] 3xl:w-[67px]"></div>
                  <Column className="items-start lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:my-[1px] lg:my-[1px] my-[2px] w-[67%]">
                    <Text className="font-semibold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-bluegray_901 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left">{`Meta`}</Text>
                    <Column className="font-poppins lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Image
                          src="img_mappin.svg"
                          className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] lg:my-[2px] my-[3.5px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] object-contain w-[8%]"
                          alt="MapPin"
                        />
                        <Image
                          src="defaultNoData.png"
                          className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:my-[1px] my-[2.5px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                          alt="Vector"
                        />
                        <Text className="font-normal not-italic text-bluegray_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`Menlo Park, USA`}</Text>
                      </Row>
                    </Column>
                  </Column>
                </Row>
                <Column className="items-center lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Line className="bg-gray_300_7f h-[1px] mx-[auto] w-[90%]" />
                </Column>
                <Text className="font-semibold lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] text-bluegray_901 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left">{`3D Artist`}</Text>
                <Row className="font-poppins items-center justify-start lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[40%]">
                  <Row className="items-center justify-start w-[50%]">
                    <div className="bg-orange_300 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] xl:my-[5px] lg:my-[5px] my-[6.5px] 2xl:my-[6px] 3xl:my-[7px] rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"></div>
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`Full Time`}</Text>
                  </Row>
                  <Row className="items-center justify-start lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] w-[40%]">
                    <div className="bg-orange_300 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] xl:my-[5px] lg:my-[5px] my-[6.5px] 2xl:my-[6px] 3xl:my-[7px] rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"></div>
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`Onsite`}</Text>
                  </Row>
                </Row>
                <Column className="items-center lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Row className="items-center justify-between mx-[auto] w-[90%]">
                    <Text className="font-medium font-ubuntu 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] lg:text-fs17 xl:text-fs19 text-fs22 3xl:text-fs26 text-gray_301 text-left">
                      <span className="text-indigo_800 text-fs24 font-sora font-semibold lg:text-fs18 xl:text-fs21 3xl:text-fs28">
                        <>{`$2000`}</>
                      </span>
                      <span className="text-bluegray_400 text-fs16 font-sora font-normal lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                        <>{`/month`}</>
                      </span>
                    </Text>
                    <Button className="bg-indigo_800 font-normal font-sora not-italic lg:py-[13px] xl:py-[15px] py-[17px] 3xl:py-[20px] rounded-radius40 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 w-[35%]">{`Apply Now`}</Button>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-start justify-start rounded-radius20 shadow-bs w-[100%]">
                <Row className="items-center justify-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[51%]">
                  <div className="bg-gray_102 lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius40 lg:w-[43px] xl:w-[49px] w-[56px] 3xl:w-[67px]"></div>
                  <Column className="items-start lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:my-[1px] lg:my-[1px] my-[2px] w-[63%]">
                    <Text className="font-semibold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-bluegray_901 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left">{`Apple`}</Text>
                    <Column className="font-poppins lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Image
                          src="img_mappin_1.svg"
                          className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:my-[1px] my-[2.5px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                          alt="MapPin"
                        />
                        <Text className="font-normal not-italic text-bluegray_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`California, USA`}</Text>
                      </Row>
                    </Column>
                  </Column>
                </Row>
                <Column className="items-center lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Line className="bg-gray_300_7f h-[1px] mx-[auto] w-[90%]" />
                </Column>
                <Text className="font-semibold lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] text-bluegray_901 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left">{`Flutter Developer`}</Text>
                <Row className="font-poppins items-center justify-start lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[40%]">
                  <Row className="items-center justify-start w-[50%]">
                    <div className="bg-orange_300 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] xl:my-[5px] lg:my-[5px] my-[6.5px] 2xl:my-[6px] 3xl:my-[7px] rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"></div>
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`Full Time`}</Text>
                  </Row>
                  <Row className="items-center justify-start lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] w-[40%]">
                    <div className="bg-orange_300 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] xl:my-[5px] lg:my-[5px] my-[6.5px] 2xl:my-[6px] 3xl:my-[7px] rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"></div>
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`Onsite`}</Text>
                  </Row>
                </Row>
                <Column className="items-center lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Row className="items-center justify-between mx-[auto] w-[90%]">
                    <Text className="font-medium font-ubuntu 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] lg:text-fs17 xl:text-fs19 text-fs22 3xl:text-fs26 text-gray_301 text-left">
                      <span className="text-indigo_800 text-fs24 font-sora font-semibold lg:text-fs18 xl:text-fs21 3xl:text-fs28">
                        <>{`$3300`}</>
                      </span>
                      <span className="text-bluegray_400 text-fs16 font-sora font-normal lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                        <>{`/month`}</>
                      </span>
                    </Text>
                    <Button className="bg-indigo_800 font-normal font-sora not-italic lg:py-[13px] xl:py-[15px] py-[17px] 3xl:py-[20px] rounded-radius40 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 w-[35%]">{`Apply Now`}</Button>
                  </Row>
                </Column>
              </Column>
            </Grid>
            <Row className="items-center justify-center lg:mt-[37px] xl:mt-[42px] mt-[48px] 3xl:mt-[57px] mx-[auto] w-[10%]">
              <Text className="font-normal xl:my-[1px] lg:my-[1px] my-[2px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_800 text-left">{`Show all jobs`}</Text>
              <Image
                src="img_arrowright_1.svg"
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="ArrowRight"
              />
            </Row>
          </Column>
        </Column>
        <Column className="font-sora items-end xl:mt-[113px] mt-[128px] 3xl:mt-[153px] lg:mt-[99px] w-[100%]">
          <Row className="bg-gradient  items-center justify-end lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] xl:mr-[1px] lg:mr-[1px] mr-[2px] rounded-bl-[400px] rounded-br-[0] rounded-tl-[400px] rounded-tr-[0] w-[94%]">
            <Image
              src="img_photo.svg"
              className="lg:h-[246px] xl:h-[282px] h-[316px] 2xl:h-[317px] 3xl:h-[380px] lg:my-[49px] xl:my-[56px] my-[64px] 3xl:my-[76px] object-contain w-[43%]"
              alt="Photo"
            />
            <Column className="items-start lg:ml-[40px] xl:ml-[46px] ml-[52px] 3xl:ml-[62px] lg:mr-[105px] xl:mr-[120px] mr-[136px] 3xl:mr-[163px] lg:my-[49px] xl:my-[56px] my-[64px] 3xl:my-[76px] w-[38%]">
              <Column className="w-[100%]">
                <Column className="w-[100%]">
                  <Text className="font-semibold font-sora lg:leading-lh50 xl:leading-lh57 2xl:leading-lh65 leading-lh6500 3xl:leading-lh78 lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-left text-white_A700 tracking-ls2 w-[100%]">{`Let's start joining us and get a job`}</Text>
                  <Text className="font-light font-opensans leading-lh18000 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 w-[100%]">
                    {
                      <>
                        {`Let's join our platform at jbs.me for an experience in finding a job `}
                        <br />
                        {`that is easier and matches what you are looking for`}
                      </>
                    }
                  </Text>
                </Column>
              </Column>
              <Row className="items-center justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[37px] xl:mt-[42px] mt-[48px] 3xl:mt-[57px] w-[63%]">
                <Button className="border border-orange_300 border-solid font-semibold lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] rounded-radius40 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-orange_300 w-[49%]">{`Join now`}</Button>
                <Row className="items-center justify-between lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] lg:my-[15px] xl:my-[17px] my-[20px] 3xl:my-[24px] w-[38%]">
                  <Text className="font-semibold xl:my-[1px] lg:my-[1px] my-[2px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-orange_300">{`Learn more`}</Text>
                  <Image
                    src="img_arrowright_2.svg"
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="ArrowRight"
                  />
                </Row>
              </Row>
            </Column>
          </Row>
        </Column>
        <Column className="font-sora 3xl:mt-[105px] lg:mt-[68px] xl:mt-[78px] mt-[88px] w-[100%]">
          <Column className="items-center justify-center w-[100%]">
            <Row className="items-end justify-between lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] mx-[auto] w-[83%]">
              <Column className="items-start justify-start w-[51%]">
                <Text className="font-semibold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-bluegray_900 lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-left tracking-ls2">{`Increase Your Knowledge`}</Text>
                <Text className="font-light lg:leading-lh25 xl:leading-lh29 2xl:leading-lh33 leading-lh3300 3xl:leading-lh39 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] text-bluegray_901 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[100%]">{`We present selected articles to increase your knowledge in the career world`}</Text>
              </Column>
              <Row className="items-center justify-between 3xl:mt-[108px] lg:mt-[70px] xl:mt-[80px] mt-[90px] w-[8%]">
                <Text className="font-normal xl:my-[1px] lg:my-[1px] my-[2px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_800 text-left">{`View all`}</Text>
                <Image
                  src="img_arrowright_1.svg"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="ArrowRight"
                />
              </Row>
            </Row>
            <List
              className="lg:gap-[18px] xl:gap-[21px] gap-[24px] 3xl:gap-[28px] grid grid-cols-3 min-h-[auto] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] mx-[auto] w-[83%]"
              orientation="horizontal"
            >
              <Column className="w-[100%]">
                <Image
                  src="img_photo_1.svg"
                  className="lg:h-[187px] xl:h-[214px] h-[240px] 2xl:h-[241px] 3xl:h-[289px] object-cover w-[100%]"
                  alt="Photo"
                />
                <Column className="items-start justify-start lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                  <Column className="w-[100%]">
                    <Column className="items-start justify-start w-[100%]">
                      <Text className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] not-italic text-bluegray_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`28 January 2022`}</Text>
                      <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic text-bluegray_901 lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left w-[100%]">{`Productive things you can do while waiting for the results...`}</Text>
                    </Column>
                  </Column>
                  <Text className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_800 text-left">{`Read more`}</Text>
                </Column>
              </Column>
              <Column className="w-[100%]">
                <Image
                  src="img_photo_2.svg"
                  className="lg:h-[187px] xl:h-[214px] h-[240px] 2xl:h-[241px] 3xl:h-[289px] object-cover w-[100%]"
                  alt="Photo"
                />
                <Column className="items-start justify-start lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                  <Column className="w-[100%]">
                    <Column className="items-start justify-start w-[100%]">
                      <Text className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] not-italic text-bluegray_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`26 February 2022`}</Text>
                      <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic text-bluegray_901 lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left w-[100%]">{`What recruiters pay attention to to judge you as a worker...`}</Text>
                    </Column>
                  </Column>
                  <Text className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_800 text-left">{`Read more`}</Text>
                </Column>
              </Column>
              <Column className="w-[100%]">
                <Image
                  src="img_photo_3.svg"
                  className="lg:h-[187px] xl:h-[214px] h-[240px] 2xl:h-[241px] 3xl:h-[289px] object-cover w-[100%]"
                  alt="Photo"
                />
                <Column className="items-start justify-start lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                  <Column className="w-[100%]">
                    <Column className="items-start justify-start w-[100%]">
                      <Text className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] not-italic text-bluegray_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`12 March 2022`}</Text>
                      <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic text-bluegray_901 lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left w-[100%]">{`Here are 10 frequently asked questions in job interviews...`}</Text>
                    </Column>
                  </Column>
                  <Text className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_800 text-left">{`Read more`}</Text>
                </Column>
              </Column>
            </List>
          </Column>
          <footer className="lg:mt-[37px] xl:mt-[42px] mt-[48px] 3xl:mt-[57px] w-[100%]">
            <Column className="bg-bluegray_902 items-center justify-end w-[100%]">
              <Row className="items-start justify-between lg:mt-[49px] xl:mt-[56px] mt-[64px] 3xl:mt-[76px] mx-[auto] w-[83%]">
                <Row className="items-center justify-between lg:mb-[22px] xl:mb-[25px] mb-[29px] 3xl:mb-[34px] w-[48%]">
                  <Column className="rotate-[-180deg] w-[20%]">
                    <Text className="font-semibold rotate-[-180deg] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700">{`Services`}</Text>
                    <Column className="lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                      <Column className="w-[100%]">
                        <Text className="font-normal not-italic rotate-[-180deg] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700_b2">{`Jobs Vacancy`}</Text>
                        <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic rotate-[-180deg] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700_b2">{`Mentoring`}</Text>
                        <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic rotate-[-180deg] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700_b2">{`Our Community`}</Text>
                        <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic rotate-[-180deg] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700_b2">{`Blogs`}</Text>
                        <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic rotate-[-180deg] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700_b2">{`Newsletter`}</Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="rotate-[-180deg] w-[17%]">
                    <Text className="font-semibold rotate-[-180deg] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700">{`Information`}</Text>
                    <Column className="lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                      <Column className="w-[100%]">
                        <Text className="font-normal not-italic rotate-[-180deg] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700_b2">{`Sign Up`}</Text>
                        <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic rotate-[-180deg] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700_b2">{`Quick Tips`}</Text>
                        <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic rotate-[-180deg] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700_b2">{`Applyment`}</Text>
                        <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic rotate-[-180deg] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700_b2">{`Sitemape`}</Text>
                        <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic rotate-[-180deg] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700_b2">{`Help Center`}</Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="rotate-[-180deg] w-[21%]">
                    <Text className="font-semibold rotate-[-180deg] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700">{`Platform`}</Text>
                    <Column className="lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                      <Column className="w-[100%]">
                        <Text className="font-normal not-italic rotate-[-180deg] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700_b2">{`About Us`}</Text>
                        <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic rotate-[-180deg] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700_b2">{`Terms of Use`}</Text>
                        <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic rotate-[-180deg] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700_b2">{`FAQ`}</Text>
                        <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic rotate-[-180deg] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700_b2">{`Contact Us`}</Text>
                        <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic rotate-[-180deg] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700_b2">{`Partnership`}</Text>
                      </Column>
                    </Column>
                  </Column>
                </Row>
                <Column className="items-start justify-start lg:mr-[62px] xl:mr-[71px] mr-[80px] 3xl:mr-[96px] w-[32%]">
                  <Column className="w-[100%]">
                    <Column className="items-start justify-start w-[100%]">
                      <Text className="font-semibold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left text-white_A700">{`Get It Touch`}</Text>
                      <Column className="lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                        <Row className="bg-white_A700 items-center justify-between rounded-radius40 w-[100%]">
                          <Text className="font-normal lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:my-[17px] xl:my-[20px] my-[23px] 3xl:my-[27px] not-italic text-bluegray_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`Enter your email address...`}</Text>
                          <Image
                            src="img_frame53.svg"
                            className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] object-contain rounded-radius40 w-[48px]"
                            alt="Frame53"
                          />
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="items-start justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[82%]">
                    <Image
                      src="img_sosmed.svg"
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] object-contain w-[66%]"
                      alt="sosmed"
                    />
                    <Column className="lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Text className="font-light lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_301 text-left">{`(021) 876 567 986`}</Text>
                        <Text className="font-light lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_301 text-left">{`jbsme@official.com`}</Text>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Row>
              <Line className="bg-white_A700_33 h-[1px] lg:mt-[37px] xl:mt-[42px] mt-[48px] 3xl:mt-[57px] mx-[auto] w-[83%]" />
              <Row className="items-center justify-between lg:mb-[31px] xl:mb-[35px] mb-[40px] 3xl:mb-[48px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] mx-[auto] w-[83%]">
                <Row className="items-start justify-start w-[9%]">
                  <Image
                    src="img_ic_5.svg"
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] mb-[1px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="ic"
                  />
                  <Text className="font-bold lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left text-white_A700_99">{`Jbs.me`}</Text>
                </Row>
                <Text className="font-normal lg:my-[2px] my-[3.5px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-right text-white_A700_99">{`© Jbs.me 2022 all rights reserved`}</Text>
              </Row>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default JobseekerLandingPageDesktopPage;

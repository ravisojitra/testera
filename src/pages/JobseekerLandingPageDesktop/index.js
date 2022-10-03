import React from "react";

import {
  Column,
  Stack,
  Img,
  Row,
  Text,
  Button,
  Line,
  List,
  Input,
  Grid,
} from "components";

const JobseekerLandingPageDesktopPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-ubuntu justify-start mx-[auto] w-[100%]">
        <Column className="items-center w-[100%]">
          <Stack className="lg:h-[587px] xl:h-[734px] 2xl:h-[825px] 3xl:h-[990px] w-[100%]">
            <Stack className="absolute lg:h-[587px] xl:h-[734px] 2xl:h-[825px] 3xl:h-[990px] inset-[0] w-[100%]">
              <Img
                src="images/img_maskgroup.png"
                className="absolute lg:h-[587px] xl:h-[734px] 2xl:h-[825px] 3xl:h-[990px] inset-[0] w-[100%]"
                alt="MaskGroup"
              />
              <header className="absolute top-[0] w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Row className="items-center justify-center xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[85px] w-[37%]">
                    <Row className="items-center w-[20%]">
                      <Img
                        src="images/img_ic.svg"
                        className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                        alt="ic"
                      />
                      <Text className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-amber_300 w-[auto]">
                        <span className="text-white_A700 font-sora">Jbs</span>
                        <span className="text-amber_300 font-sora">.me</span>
                      </Text>
                    </Row>
                    <Row className="font-sora items-center justify-between lg:ml-[45px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] w-[68%]">
                      <Text className="cursor-pointer hover:font-semibold font-semibold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-amber_300 w-[auto]">
                        Home
                      </Text>
                      <Text className="hover:font-semibold hover:text-amber_300 Category">
                        Category
                      </Text>
                      <Text className="hover:font-semibold hover:text-amber_300 Category">
                        About Us
                      </Text>
                      <Text className="hover:font-semibold hover:text-amber_300 Category">
                        Contact
                      </Text>
                    </Row>
                  </Row>
                  <Row className="font-sora items-center justify-center xl:mr-[106px] 2xl:mr-[120px] 3xl:mr-[144px] lg:mr-[85px] lg:my-[25px] xl:my-[32px] 2xl:my-[36px] 3xl:my-[43px] w-[15%]">
                    <Text className="font-semibold lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-white_A700 w-[auto]">
                      Login
                    </Text>
                    <Button
                      className="font-semibold lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[56%]"
                      shape="CircleBorder40"
                      size="lg"
                      variant="OutlineAmber300"
                    >
                      Sign Up
                    </Button>
                  </Row>
                </Row>
              </header>
            </Stack>
            <Column className="absolute bottom-[10%] font-sora justify-start left-[8%] w-[43%]">
              <Column className="items-center w-[100%]">
                <Column className="justify-start w-[100%]">
                  <Column className="font-sora items-center w-[100%]">
                    <Stack className="lg:h-[131px] xl:h-[164px] 2xl:h-[185px] 3xl:h-[221px] w-[100%]">
                      <div className="absolute bg-orange_300 bottom-[3%] 3xl:h-[100px] lg:h-[60px] xl:h-[74px] 2xl:h-[84px] right-[13%] rounded-radius64 w-[42%]"></div>
                      <Text className="absolute font-semibold inset-[0] 3xl:leading-[110px] lg:leading-[65px] xl:leading-[81px] 2xl:leading-[92px] lg:text-[51px] xl:text-[64px] 2xl:text-[72px] 3xl:text-[86px] text-white_A700 lg:tracking-ls2 2xl:tracking-ls3 xl:tracking-ls3 3xl:tracking-ls4 w-[100%]">
                        <span className="text-white_A700 font-sora">
                          The best jobsite
                          <br />
                          for your{" "}
                        </span>
                        <span className="text-bluegray_900 font-sora">
                          future
                        </span>
                      </Text>
                    </Stack>
                  </Column>
                  <Text className="font-light font-opensans lg:leading-[23px] xl:leading-[29px] 2xl:leading-[33px] 3xl:leading-[39px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[100%]">
                    We help you to find the best job to build your future and
                    build a better future of digital era
                  </Text>
                </Column>
              </Column>
              <Row className="items-center lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] w-[65%]">
                <Button
                  className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[58%]"
                  shape="CircleBorder40"
                  size="xl"
                  variant="OutlineAmber3001_2"
                >
                  Get It Now
                </Button>
                <Button className="bg-transparent font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-amber_300 text-center w-[31%]">
                  Learn more
                </Button>
              </Row>
              <Text className="font-normal lg:leading-[23px] xl:leading-[29px] 2xl:leading-[33px] 3xl:leading-[39px] lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-white_A700_cc w-[34%]">
                Supported by 3k+ companies
              </Text>
              <Row className="font-montserrat items-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[92%]">
                <Row className="items-center w-[18%]">
                  <Img
                    src="images/img_ic_1.svg"
                    className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[38%]"
                    alt="ic"
                  />
                  <Text className="font-medium mb-[0.18px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-white_A700_7f w-[auto]">
                    Meta
                  </Text>
                </Row>
                <Img
                  src="images/img_ic_2.svg"
                  className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[38px] lg:ml-[39px] xl:ml-[49px] 2xl:ml-[56px] 3xl:ml-[67px] my-[0.05px] w-[17%]"
                  alt="ic"
                />
                <Row className="font-worksans items-start justify-center lg:ml-[39px] xl:ml-[49px] 2xl:ml-[56px] 3xl:ml-[67px] w-[18%]">
                  <Text className="font-semibold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-white_A700_7f w-[auto]">
                    Linked
                  </Text>
                  <Img
                    src="images/img_ic_3.svg"
                    className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] ml-[1.54px] mt-[0.38px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]"
                    alt="ic"
                  />
                </Row>
                <Img
                  src="images/img_ic_4.svg"
                  className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[39px] xl:ml-[49px] 2xl:ml-[56px] 3xl:ml-[67px] w-[18%]"
                  alt="ic"
                />
              </Row>
            </Column>
          </Stack>
          <Row className="bg-indigo_800 font-sora items-center lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[100%]">
            <Column className="lg:ml-[153px] xl:ml-[191px] 2xl:ml-[215px] 3xl:ml-[258px] lg:my-[35px] xl:my-[44px] 2xl:my-[50px] 3xl:my-[60px] w-[11%]">
              <Text className="font-semibold ml-[3px] lg:text-[39px] xl:text-[49px] 2xl:text-[56px] 3xl:text-[67px] text-white_A700 w-[auto]">
                <span className="text-white_A700 font-sora">1,9</span>
                <span className="text-orange_300 font-sora">K+</span>
              </Text>
              <Text className="font-normal lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700_b2 w-[auto]">
                Ready Job Vacancy
              </Text>
            </Column>
            <Line className="bg-white_A700_4c h-[undefinedpx] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[85px] w-[1px]" />
            <Column className="items-center xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[85px] lg:my-[35px] xl:my-[44px] 2xl:my-[50px] 3xl:my-[60px] w-[13%]">
              <Text className="font-semibold lg:text-[39px] xl:text-[49px] 2xl:text-[56px] 3xl:text-[67px] text-white_A700 w-[auto]">
                <span className="text-white_A700 font-sora">276</span>
                <span className="text-orange_300 font-sora">K+</span>
              </Text>
              <Text className="font-normal xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[8px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700_b2 w-[auto]">
                Job Seekers Active
              </Text>
            </Column>
            <Line className="bg-white_A700_4c h-[undefinedpx] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[85px] w-[1px]" />
            <Column className="items-center xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[85px] lg:mr-[153px] xl:mr-[191px] 2xl:mr-[215px] 3xl:mr-[258px] lg:my-[35px] xl:my-[44px] 2xl:my-[50px] 3xl:my-[60px] w-[13%]">
              <Text className="font-semibold xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:text-[39px] xl:text-[49px] 2xl:text-[56px] 3xl:text-[67px] text-white_A700 w-[auto]">
                <span className="text-white_A700 font-sora">3,4</span>
                <span className="text-orange_300 font-sora">K+</span>
              </Text>
              <Text className="font-normal lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700_b2 w-[auto]">
                Incorporated Company
              </Text>
            </Column>
          </Row>
          <Column className="font-sora items-center justify-center lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[100%]">
            <Column className="items-center justify-start lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[42%]">
              <Text className="font-semibold lg:leading-[46px] xl:leading-[57px] 2xl:leading-[65px] 3xl:leading-[78px] lg:text-[34px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-bluegray_900 text-center tracking-ls1 w-[100%]">
                More easier to find a job with our platform
              </Text>
              <Text className="font-light leading-[180.00%] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_901 text-center w-[100%]">
                The following features make our service easier to help you find
                suitable jobs from various companies
              </Text>
            </Column>
            <List
              className="lg:gap-[56px] xl:gap-[71px] 2xl:gap-[80px] 3xl:gap-[96px] grid grid-cols-3 lg:mb-[34px] xl:mb-[42px] 2xl:mb-[48px] 3xl:mb-[57px] min-h-[auto] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[70%]"
              orientation="horizontal"
            >
              <Column className="items-center justify-start w-[100%]">
                <div className="bg-gray_300 lg:h-[103px] xl:h-[129px] 2xl:h-[145px] 3xl:h-[173px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] rounded-radius50 lg:w-[102px] xl:w-[128px] 2xl:w-[144px] 3xl:w-[172px]"></div>
                <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Text className="EasyApplying">Easy Applying</Text>
                  <Text className="Theprocessof">
                    The process of applying for a job is easier and faster
                  </Text>
                </Column>
              </Column>
              <Column className="items-center justify-start w-[100%]">
                <div className="bg-gray_300 lg:h-[103px] xl:h-[129px] 2xl:h-[145px] 3xl:h-[173px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] rounded-radius50 lg:w-[102px] xl:w-[128px] 2xl:w-[144px] 3xl:w-[172px]"></div>
                <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Text className="EasyApplying">Many Vacancies</Text>
                  <Text className="Theprocessof">
                    There are many job vacancies from various companies
                  </Text>
                </Column>
              </Column>
              <Column className="items-center justify-start w-[100%]">
                <div className="bg-gray_300 lg:h-[103px] xl:h-[129px] 2xl:h-[145px] 3xl:h-[173px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] rounded-radius50 lg:w-[102px] xl:w-[128px] 2xl:w-[144px] 3xl:w-[172px]"></div>
                <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Text className="EasyApplying">Best Support</Text>
                  <Text className="Theprocessof">
                    We provide full support for job seekers <br />
                    for better results
                  </Text>
                </Column>
              </Column>
            </List>
          </Column>
          <Column className="font-sora items-center justify-center lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[100%]">
            <Column className="items-center justify-start lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[45%]">
              <Text className="Lookingforaj">Looking for a job now</Text>
              <Text className="font-light lg:leading-[23px] xl:leading-[29px] 2xl:leading-[33px] 3xl:leading-[39px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_901 text-center w-[100%]">
                Type in the name of the position, company or job category you
                are looking for
              </Text>
            </Column>
            <Row className="bg-white_A700 border border-indigo_200 border-solid items-center justify-center lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rounded-radius80 w-[55%]">
              <Img
                src="images/img_frame28.svg"
                className="lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] rounded-radius50 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                alt="Frame28"
              />
              <Row className="items-center justify-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[38%]">
                <Text className="font-normal lg:leading-[23px] xl:leading-[29px] 2xl:leading-[33px] 3xl:leading-[39px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[68%]">
                  Category
                </Text>
                <Line className="bg-gray_300 h-[undefinedpx] lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[1px]" />
                <Img
                  src="images/img_frame28_1.svg"
                  className="lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] rounded-radius50 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                  alt="Frame28"
                />
              </Row>
              <Text className="font-normal lg:leading-[23px] xl:leading-[29px] 2xl:leading-[33px] 3xl:leading-[39px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[26%]">
                Location
              </Text>
              <Button
                className="lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mr-[5px] xl:mr-[7px] 2xl:mr-[8px] 3xl:mr-[9px] lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] text-center w-[20%]"
                shape="CircleBorder40"
                variant="FillIndigo800"
              ></Button>
            </Row>
            <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[71%]">
              <Text className="font-normal not-italic lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_901 w-[auto]">
                Popular category:
              </Text>
              <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Stack className="lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] w-[23%]">
                    <Input
                      className="placeholder:text-bluegray_900 Group54"
                      wrapClassName="absolute inset-[0] m-[0] w-[100%]"
                      name="Group54"
                      placeholder="Full Stack Developer"
                      shape="CircleBorder40"
                      size="sm"
                      variant="OutlineIndigo200"
                    ></Input>
                    <Button
                      className="absolute font-semibold h-[max-content] inset-y-[0] my-[auto] right-[5%] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[19%]"
                      shape="CircleBorder100"
                      size="md"
                      variant="FillIndigo800"
                    >
                      324
                    </Button>
                  </Stack>
                  <Stack className="lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] w-[19%]">
                    <Input
                      className="placeholder:text-bluegray_900 Group54"
                      wrapClassName="absolute inset-[0] m-[0] w-[100%]"
                      name="Group55"
                      placeholder="UI/UX Designer"
                      shape="CircleBorder40"
                      size="sm"
                      variant="OutlineIndigo200"
                    ></Input>
                    <Button
                      className="absolute font-semibold h-[max-content] inset-y-[0] my-[auto] right-[6%] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[23%]"
                      shape="CircleBorder100"
                      size="md"
                      variant="FillIndigo800"
                    >
                      259
                    </Button>
                  </Stack>
                  <Stack className="lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] w-[18%]">
                    <Input
                      className="placeholder:text-bluegray_900 Group54"
                      wrapClassName="absolute inset-[0] m-[0] w-[100%]"
                      name="Group56"
                      placeholder="IOS Developer"
                      shape="CircleBorder40"
                      size="sm"
                      variant="OutlineIndigo200"
                    ></Input>
                    <Button
                      className="absolute font-semibold h-[max-content] inset-y-[0] my-[auto] right-[6%] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[22%]"
                      shape="CircleBorder100"
                      size="md"
                      variant="FillIndigo800"
                    >
                      231
                    </Button>
                  </Stack>
                  <Stack className="lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] w-[19%]">
                    <Input
                      className="placeholder:text-bluegray_900 Group54"
                      wrapClassName="absolute inset-[0] m-[0] w-[100%]"
                      name="Group57"
                      placeholder="Web Developer"
                      shape="CircleBorder40"
                      size="sm"
                      variant="OutlineIndigo200"
                    ></Input>
                    <Button
                      className="absolute font-semibold h-[max-content] inset-y-[0] my-[auto] right-[6%] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[22%]"
                      shape="CircleBorder100"
                      size="md"
                      variant="FillIndigo800"
                    >
                      222
                    </Button>
                  </Stack>
                  <Stack className="lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] w-[16%]">
                    <Input
                      className="placeholder:text-bluegray_900 Group54"
                      wrapClassName="absolute inset-[0] m-[0] w-[100%]"
                      name="Group58"
                      placeholder="Copywriter"
                      shape="CircleBorder40"
                      size="sm"
                      variant="OutlineIndigo200"
                    ></Input>
                    <Button
                      className="absolute font-semibold h-[max-content] inset-y-[0] my-[auto] right-[7%] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[25%]"
                      shape="CircleBorder100"
                      size="md"
                      variant="FillIndigo800"
                    >
                      219
                    </Button>
                  </Stack>
                </Row>
                <Row className="items-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[91%]">
                  <Stack className="lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] w-[22%]">
                    <Input
                      className="placeholder:text-bluegray_900 Group54"
                      wrapClassName="absolute inset-[0] m-[0] w-[100%]"
                      name="Group59"
                      placeholder="Graphic Designer"
                      shape="CircleBorder40"
                      size="sm"
                      variant="OutlineIndigo200"
                    ></Input>
                    <Button
                      className="absolute font-semibold h-[max-content] inset-y-[0] my-[auto] right-[6%] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[20%]"
                      shape="CircleBorder100"
                      size="md"
                      variant="FillIndigo800"
                    >
                      192
                    </Button>
                  </Stack>
                  <Stack className="lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[16%]">
                    <Input
                      className="placeholder:text-bluegray_900 Group54"
                      wrapClassName="absolute inset-[0] m-[0] w-[100%]"
                      name="Group60"
                      placeholder="Illustrator"
                      shape="CircleBorder40"
                      size="sm"
                      variant="OutlineIndigo200"
                    ></Input>
                    <Button
                      className="absolute font-semibold h-[max-content] inset-y-[0] my-[auto] right-[8%] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[27%]"
                      shape="CircleBorder100"
                      size="md"
                      variant="FillIndigo800"
                    >
                      176
                    </Button>
                  </Stack>
                  <Stack className="lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[19%]">
                    <Input
                      className="placeholder:text-bluegray_900 Group54"
                      wrapClassName="absolute inset-[0] m-[0] w-[100%]"
                      name="Group61"
                      placeholder="Video Editor"
                      shape="CircleBorder40"
                      size="sm"
                      variant="OutlineIndigo200"
                    ></Input>
                    <Button
                      className="absolute font-semibold h-[max-content] inset-y-[0] my-[auto] right-[7%] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[24%]"
                      shape="CircleBorder100"
                      size="md"
                      variant="FillIndigo800"
                    >
                      154
                    </Button>
                  </Stack>
                  <Stack className="lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[20%]">
                    <Input
                      className="placeholder:text-bluegray_900 Group54"
                      wrapClassName="absolute inset-[0] m-[0] w-[100%]"
                      name="Group62"
                      placeholder="Front End Dev"
                      shape="CircleBorder40"
                      size="sm"
                      variant="OutlineIndigo200"
                    ></Input>
                    <Button
                      className="absolute font-semibold h-[max-content] inset-y-[0] my-[auto] right-[7%] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[23%]"
                      shape="CircleBorder100"
                      size="md"
                      variant="FillIndigo800"
                    >
                      142
                    </Button>
                  </Stack>
                  <Stack className="lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[18%]">
                    <Input
                      className="placeholder:text-bluegray_900 Group54"
                      wrapClassName="absolute inset-[0] m-[0] w-[100%]"
                      name="Group63"
                      placeholder="3D Modeler"
                      shape="CircleBorder40"
                      size="sm"
                      variant="OutlineIndigo200"
                    ></Input>
                    <Button
                      className="absolute font-semibold h-[max-content] inset-y-[0] my-[auto] right-[7%] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[25%]"
                      shape="CircleBorder100"
                      size="md"
                      variant="FillIndigo800"
                    >
                      128
                    </Button>
                  </Stack>
                </Row>
                <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[69%]">
                  <Stack className="lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] w-[19%]">
                    <Input
                      className="placeholder:text-bluegray_900 Group54"
                      wrapClassName="absolute inset-[0] m-[0] w-[100%]"
                      name="Group64"
                      placeholder="Officer"
                      shape="CircleBorder40"
                      size="sm"
                      variant="OutlineIndigo200"
                    ></Input>
                    <Button
                      className="absolute font-semibold h-[max-content] inset-y-[0] my-[auto] right-[9%] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[32%]"
                      shape="CircleBorder100"
                      size="md"
                      variant="FillIndigo800"
                    >
                      102
                    </Button>
                  </Stack>
                  <Stack className="lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[28%]">
                    <Input
                      className="placeholder:text-bluegray_900 Group54"
                      wrapClassName="absolute inset-[0] m-[0] w-[100%]"
                      name="Group65"
                      placeholder="Content Creator"
                      shape="CircleBorder40"
                      size="sm"
                      variant="OutlineIndigo200"
                    ></Input>
                    <Button
                      className="absolute font-semibold h-[max-content] inset-y-[0] my-[auto] right-[6%] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[18%]"
                      shape="CircleBorder100"
                      size="md"
                      variant="FillIndigo800"
                    >
                      95
                    </Button>
                  </Stack>
                  <Stack className="lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[21%]">
                    <Input
                      className="placeholder:text-bluegray_900 Group54"
                      wrapClassName="absolute inset-[0] m-[0] w-[100%]"
                      name="Group66"
                      placeholder="Translator"
                      shape="CircleBorder40"
                      size="sm"
                      variant="OutlineIndigo200"
                    ></Input>
                    <Button
                      className="absolute font-semibold h-[max-content] inset-y-[0] my-[auto] right-[8%] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[23%]"
                      shape="CircleBorder100"
                      size="md"
                      variant="FillIndigo800"
                    >
                      72
                    </Button>
                  </Stack>
                  <Stack className="lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[27%]">
                    <Input
                      className="placeholder:text-bluegray_900 Group54"
                      wrapClassName="absolute inset-[0] m-[0] w-[100%]"
                      name="Group67"
                      placeholder="Java Developer"
                      shape="CircleBorder40"
                      size="sm"
                      variant="OutlineIndigo200"
                    ></Input>
                    <Button
                      className="absolute font-semibold h-[max-content] inset-y-[0] my-[auto] right-[6%] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[18%]"
                      shape="CircleBorder100"
                      size="md"
                      variant="FillIndigo800"
                    >
                      51
                    </Button>
                  </Stack>
                </Row>
              </Column>
            </Column>
            <Button className="bg-transparent font-normal my-[2px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-indigo_800 w-[11%]">
              More categories
            </Button>
          </Column>
          <Column className="bg-gray_100 font-sora items-center justify-center lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[100%]">
            <Row className="items-end justify-between lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[83%]">
              <Column className="justify-start w-[53%]">
                <Text className="Lookingforaj">Choose Our Available Jobs</Text>
                <Text className="font-light lg:leading-[23px] xl:leading-[29px] 2xl:leading-[33px] 3xl:leading-[39px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_901 w-[100%]">
                  Find the following job that suits you and apply now
                </Text>
              </Column>
              <Row className="lg:gap-[5px] xl:gap-[7px] 2xl:gap-[8px] 3xl:gap-[9px] grid grid-cols-2 items-center justify-between lg:mt-[46px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] px-[0] w-[21%]">
                <Button
                  className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
                  shape="CircleBorder40"
                  size="lg"
                  variant="FillIndigo800"
                >
                  Recent
                </Button>
                <Button
                  className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
                  shape="CircleBorder40"
                  size="lg"
                  variant="FillWhiteA700"
                >
                  Popular
                </Button>
              </Row>
            </Row>
            <Grid className="lg:gap-[17px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-3 lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[83%]">
              <Column className="bg-white_A700 justify-start rounded-radius20 shadow-bs w-[100%]">
                <Column className="font-inter items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Row className="items-center w-[90%]">
                    <div className="bg-gray_101 lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[8px] rounded-radius50 lg:w-[39px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"></div>
                    <Column className="font-sora lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[40%]">
                      <Text className="Name">Microsoft</Text>
                      <Column className="font-poppins items-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_mappin.svg"
                            className="MapPin"
                            alt="MapPin"
                          />
                          <Text className="Frame36">Washington, USA</Text>
                        </Row>
                      </Column>
                    </Column>
                    <Button
                      className="font-normal lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] xl:mr-[11px] 2xl:mr-[12px] 3xl:mr-[15px] lg:mr-[8px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[27%]"
                      size="sm"
                      variant="FillGray101"
                    >
                      ADAD
                    </Button>
                  </Row>
                  <Line className="bg-gray_300_7f h-[undefinedpx] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[90%]" />
                </Column>
                <Text className="font-sora Group82">Senior UX Designer</Text>
                <Row className="font-poppins items-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[40%]">
                  <Row className="items-center w-[50%]">
                    <div className="bg-orange_300 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                    <Text className="label1">Full Time</Text>
                  </Row>
                  <Row className="items-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[40%]">
                    <div className="bg-orange_300 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                    <Text className="label1">Onsite</Text>
                  </Row>
                </Row>
                <Column className="items-center lg:mb-[11px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Row className="items-center justify-between w-[90%]">
                    <Text className="Fee">
                      <span className="text-indigo_800 font-sora font-semibold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                        $2500
                      </span>
                      <span className="text-bluegray_400 font-sora font-normal lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                        /month
                      </span>
                    </Text>
                    <Button
                      className="font-normal font-sora not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[35%]"
                      shape="CircleBorder40"
                      size="lg"
                      variant="FillIndigo800"
                    >
                      Apply Now
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 justify-start rounded-radius20 shadow-bs w-[100%]">
                <Row className="items-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[58%]">
                  <div className="bg-gray_101 lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius50 lg:w-[39px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"></div>
                  <Column className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[68%]">
                    <Input
                      className="font-semibold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-bluegray_901 text-bluegray_901 w-[100%]"
                      wrapClassName="w-[34%]"
                      name="Slack"
                      placeholder="Slack"
                    ></Input>
                    <Column className="font-poppins items-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Img
                          src="images/img_mappin_1.svg"
                          className="MapPin"
                          alt="MapPin"
                        />
                        <Text className="Frame36">San Francisco, USA</Text>
                      </Row>
                    </Column>
                  </Column>
                </Row>
                <Column className="items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Line className="bg-gray_300_7f h-[undefinedpx] w-[90%]" />
                </Column>
                <Text className="Group82">Java Programmer</Text>
                <Row className="font-poppins items-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[40%]">
                  <Row className="items-center w-[50%]">
                    <div className="bg-orange_300 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                    <Text className="label1">Full Time</Text>
                  </Row>
                  <Row className="items-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[40%]">
                    <div className="bg-orange_300 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                    <Text className="label1">Onsite</Text>
                  </Row>
                </Row>
                <Column className="items-center lg:mb-[11px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Row className="items-center justify-between w-[90%]">
                    <Text className="Fee">
                      <span className="text-indigo_800 font-sora font-semibold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                        $3000
                      </span>
                      <span className="text-bluegray_400 font-sora font-normal lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                        /month
                      </span>
                    </Text>
                    <Button
                      className="font-normal font-sora not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[35%]"
                      shape="CircleBorder40"
                      size="lg"
                      variant="FillIndigo800"
                    >
                      Apply Now
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 justify-start rounded-radius20 shadow-bs w-[100%]">
                <Row className="items-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[49%]">
                  <div className="bg-gray_102 lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius50 lg:w-[39px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"></div>
                  <Column className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[62%]">
                    <Text className="Name">Adobe Inc</Text>
                    <Column className="font-poppins items-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Img
                          src="images/img_mappin_2.svg"
                          className="MapPin"
                          alt="MapPin"
                        />
                        <Text className="Frame36">San Jose, USA</Text>
                      </Row>
                    </Column>
                  </Column>
                </Row>
                <Column className="items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Line className="bg-gray_300_7f h-[undefinedpx] w-[90%]" />
                </Column>
                <Text className="Group82">IOS Developer</Text>
                <Row className="font-poppins items-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[40%]">
                  <Row className="items-center w-[50%]">
                    <div className="bg-orange_300 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                    <Text className="label1">Full Time</Text>
                  </Row>
                  <Row className="items-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[40%]">
                    <div className="bg-orange_300 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                    <Text className="label1">Onsite</Text>
                  </Row>
                </Row>
                <Column className="items-center lg:mb-[11px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Row className="items-center justify-between w-[90%]">
                    <Text className="Fee">
                      <span className="text-indigo_800 font-sora font-semibold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                        $3500
                      </span>
                      <span className="text-bluegray_400 font-sora font-normal lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                        /month
                      </span>
                    </Text>
                    <Button
                      className="font-normal font-sora not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[35%]"
                      shape="CircleBorder40"
                      size="lg"
                      variant="FillIndigo800"
                    >
                      Apply Now
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 justify-start rounded-radius20 shadow-bs w-[100%]">
                <Row className="items-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[54%]">
                  <div className="bg-gray_102 lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius50 lg:w-[39px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"></div>
                  <Column className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[65%]">
                    <Text className="Name">Google</Text>
                    <Column className="font-poppins items-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Img
                          src="images/img_mappin_3.svg"
                          className="MapPin"
                          alt="MapPin"
                        />
                        <Text className="Frame36">Cambridge, USA</Text>
                      </Row>
                    </Column>
                  </Column>
                </Row>
                <Column className="items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Line className="bg-gray_300_7f h-[undefinedpx] w-[90%]" />
                </Column>
                <Text className="Group82">Product Designer</Text>
                <Row className="font-poppins items-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[40%]">
                  <Row className="items-center w-[50%]">
                    <div className="bg-orange_300 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                    <Text className="label1">Full Time</Text>
                  </Row>
                  <Row className="items-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[40%]">
                    <div className="bg-orange_300 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                    <Text className="label1">Onsite</Text>
                  </Row>
                </Row>
                <Column className="items-center lg:mb-[11px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Row className="items-center justify-between w-[90%]">
                    <Text className="Fee">
                      <span className="text-indigo_800 font-sora font-semibold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                        $2800
                      </span>
                      <span className="text-bluegray_400 font-sora font-normal lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                        /month
                      </span>
                    </Text>
                    <Button
                      className="font-normal font-sora not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[35%]"
                      shape="CircleBorder40"
                      size="lg"
                      variant="FillIndigo800"
                    >
                      Apply Now
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 justify-start rounded-radius20 shadow-bs w-[100%]">
                <Row className="items-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[57%]">
                  <div className="bg-gray_102 lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius50 lg:w-[39px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"></div>
                  <Column className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[67%]">
                    <Text className="Name">Meta</Text>
                    <Column className="font-poppins items-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Img
                          src="images/img_mappin_4.svg"
                          className="lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] w-[8%]"
                          alt="MapPin"
                        />
                        <Img
                          src="defaultNoData.png"
                          className="MapPin"
                          alt="Vector"
                        />
                        <Text className="Frame36">Menlo Park, USA</Text>
                      </Row>
                    </Column>
                  </Column>
                </Row>
                <Column className="items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Line className="bg-gray_300_7f h-[undefinedpx] w-[90%]" />
                </Column>
                <Text className="Group82">3D Artist</Text>
                <Row className="font-poppins items-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[40%]">
                  <Row className="items-center w-[50%]">
                    <div className="bg-orange_300 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                    <Text className="label1">Full Time</Text>
                  </Row>
                  <Row className="items-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[40%]">
                    <div className="bg-orange_300 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                    <Text className="label1">Onsite</Text>
                  </Row>
                </Row>
                <Column className="items-center lg:mb-[11px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Row className="items-center justify-between w-[90%]">
                    <Text className="Fee">
                      <span className="text-indigo_800 font-sora font-semibold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                        $2000
                      </span>
                      <span className="text-bluegray_400 font-sora font-normal lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                        /month
                      </span>
                    </Text>
                    <Button
                      className="font-normal font-sora not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[35%]"
                      shape="CircleBorder40"
                      size="lg"
                      variant="FillIndigo800"
                    >
                      Apply Now
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 justify-start rounded-radius20 shadow-bs w-[100%]">
                <Row className="items-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[51%]">
                  <div className="bg-gray_102 lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius50 lg:w-[39px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"></div>
                  <Column className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[63%]">
                    <Text className="Name">Apple</Text>
                    <Column className="font-poppins items-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Img
                          src="images/img_mappin_5.svg"
                          className="MapPin"
                          alt="MapPin"
                        />
                        <Text className="Frame36">California, USA</Text>
                      </Row>
                    </Column>
                  </Column>
                </Row>
                <Column className="items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Line className="bg-gray_300_7f h-[undefinedpx] w-[90%]" />
                </Column>
                <Text className="Group82">Flutter Developer</Text>
                <Row className="font-poppins items-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[40%]">
                  <Row className="items-center w-[50%]">
                    <div className="bg-orange_300 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                    <Text className="label1">Full Time</Text>
                  </Row>
                  <Row className="items-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[40%]">
                    <div className="bg-orange_300 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                    <Text className="label1">Onsite</Text>
                  </Row>
                </Row>
                <Column className="items-center lg:mb-[11px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Row className="items-center justify-between w-[90%]">
                    <Text className="Fee">
                      <span className="text-indigo_800 font-sora font-semibold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                        $3300
                      </span>
                      <span className="text-bluegray_400 font-sora font-normal lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                        /month
                      </span>
                    </Text>
                    <Button
                      className="font-normal font-sora not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[35%]"
                      shape="CircleBorder40"
                      size="lg"
                      variant="FillIndigo800"
                    >
                      Apply Now
                    </Button>
                  </Row>
                </Column>
              </Column>
            </Grid>
            <Button className="bg-transparent font-normal my-[2px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-indigo_800 w-[10%]">
              Show all jobs
            </Button>
          </Column>
        </Column>
        <Column className="font-sora items-end xl:mt-[107px] 2xl:mt-[121px] 3xl:mt-[145px] lg:mt-[86px] w-[100%]">
          <Row className="bg-gradient  items-center justify-end lg:ml-[56px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] mr-[2px] rounded-bl-[400px] rounded-br-[0] rounded-tl-[400px] rounded-tr-[0] w-[94%]">
            <Img
              src="images/img_photo.svg"
              className="lg:h-[225px] xl:h-[282px] 2xl:h-[317px] 3xl:h-[380px] lg:ml-[45px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] lg:my-[45px] xl:my-[56px] 2xl:my-[64px] 3xl:my-[76px] w-[43%]"
              alt="Photo"
            />
            <Column className="lg:ml-[37px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[62px] xl:mr-[120px] 2xl:mr-[136px] 3xl:mr-[163px] lg:mr-[96px] lg:my-[45px] xl:my-[56px] 2xl:my-[64px] 3xl:my-[76px] w-[38%]">
              <Column className="items-center w-[100%]">
                <Column className="justify-start w-[100%]">
                  <Text className="font-semibold font-sora lg:leading-[46px] xl:leading-[57px] 2xl:leading-[65px] 3xl:leading-[78px] lg:text-[34px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-white_A700 tracking-ls1 w-[100%]">
                    Let's start joining us and get a job
                  </Text>
                  <Text className="font-light font-opensans leading-[180.00%] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[100%]">
                    {`Let's join our platform at jbs.me for an experience in finding a job `}
                    <br />
                    that is easier and matches what you are looking for
                  </Text>
                </Column>
              </Column>
              <Row className="items-center lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[63%]">
                <Button
                  className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[49%]"
                  shape="CircleBorder40"
                  size="xl"
                  variant="OutlineOrange300"
                >
                  Join now
                </Button>
                <Button className="bg-transparent font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-orange_300 w-[38%]">
                  Learn more
                </Button>
              </Row>
            </Column>
          </Row>
        </Column>
        <Column className="font-sora items-center lg:mt-[57px] xl:mt-[72px] 2xl:mt-[81px] 3xl:mt-[97px] w-[100%]">
          <Column className="items-center justify-center w-[100%]">
            <Row className="items-end justify-between lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[83%]">
              <Column className="justify-start w-[51%]">
                <Text className="Lookingforaj">Increase Your Knowledge</Text>
                <Text className="font-light lg:leading-[23px] xl:leading-[29px] 2xl:leading-[33px] 3xl:leading-[39px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_901 w-[100%]">
                  We present selected articles to increase your knowledge in the
                  career world
                </Text>
              </Column>
              <Button className="bg-transparent font-normal my-[2px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-indigo_800 w-[8%]">
                View all
              </Button>
            </Row>
            <List
              className="lg:gap-[17px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-3 min-h-[auto] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[83%]"
              orientation="horizontal"
            >
              <Column className="items-center justify-start w-[100%]">
                <Img
                  src="images/img_photo_1.svg"
                  className="Photo1"
                  alt="Photo"
                />
                <Column className="justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                  <Column className="items-center w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Text className="Frame36">28 January 2022</Text>
                      <Text className="Productivethin">
                        Productive things you can do while waiting for the
                        results...
                      </Text>
                    </Column>
                  </Column>
                  <Text className="Title2">Read more</Text>
                </Column>
              </Column>
              <Column className="items-center justify-start w-[100%]">
                <Img
                  src="images/img_photo_2.svg"
                  className="Photo1"
                  alt="Photo"
                />
                <Column className="justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                  <Column className="items-center w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Text className="Frame36">26 February 2022</Text>
                      <Text className="Productivethin">
                        What recruiters pay attention to to judge you as a
                        worker...
                      </Text>
                    </Column>
                  </Column>
                  <Text className="Title2">Read more</Text>
                </Column>
              </Column>
              <Column className="items-center justify-start w-[100%]">
                <Img
                  src="images/img_photo_3.svg"
                  className="Photo1"
                  alt="Photo"
                />
                <Column className="justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                  <Column className="items-center w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Text className="Frame36">12 March 2022</Text>
                      <Text className="Productivethin">
                        Here are 10 frequently asked questions in job
                        interviews...
                      </Text>
                    </Column>
                  </Column>
                  <Text className="Title2">Read more</Text>
                </Column>
              </Column>
            </List>
          </Column>
          <footer className="lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[100%]">
            <Column className="bg-bluegray_902 items-center justify-end w-[100%]">
              <Row className="items-start justify-between lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[83%]">
                <Row className="items-center justify-between w-[48%]">
                  <Column className="rotate-[180deg] w-[20%]">
                    <Text className="Menu1">Services</Text>
                    <Column className="items-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                      <Column className="justify-start w-[100%]">
                        <Text className="Frame49">Jobs Vacancy</Text>
                        <Text className="Shop">Mentoring</Text>
                        <Text className="Shop">Our Community</Text>
                        <Text className="Shop">Blogs</Text>
                        <Text className="Shop">Newsletter</Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="rotate-[180deg] w-[17%]">
                    <Text className="Menu1">Information</Text>
                    <Column className="items-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                      <Column className="justify-start w-[100%]">
                        <Text className="Frame49">Sign Up</Text>
                        <Text className="Shop">Quick Tips</Text>
                        <Text className="Shop">Applyment</Text>
                        <Text className="Shop">Sitemape</Text>
                        <Text className="Shop">Help Center</Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="rotate-[180deg] w-[21%]">
                    <Text className="Menu1">Platform</Text>
                    <Column className="items-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                      <Column className="justify-start w-[100%]">
                        <Text className="Frame49">About Us</Text>
                        <Text className="Shop">Terms of Use</Text>
                        <Text className="Shop">FAQ</Text>
                        <Text className="Shop">Contact Us</Text>
                        <Text className="Shop">Partnership</Text>
                      </Column>
                    </Column>
                  </Column>
                </Row>
                <Column className="justify-start lg:mr-[56px] xl:mr-[71px] 2xl:mr-[80px] 3xl:mr-[96px] w-[32%]">
                  <Column className="items-center w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Text className="font-semibold lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                        Get It Touch
                      </Text>
                      <Input
                        className="font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_400 w-[100%]"
                        wrapClassName="2xl:my-[23px] 2xl:pr-[8px] 2xl:py-[8px] 3xl:my-[27px] 3xl:pr-[9px] 3xl:py-[9px] flex lg:my-[16px] lg:pr-[5px] lg:py-[5px] pl-[0] w-[100%] xl:my-[20px] xl:pr-[7px] xl:py-[7px]"
                        name="Contact"
                        placeholder=""
                        suffix={
                          <Img
                            src="images/img_frame53.svg"
                            className="ml-[0] lg:w-[34px] lg:h-[35px] xl:w-[42px] xl:h-[43px] 2xl:w-[48px] 2xl:h-[49px] 3xl:w-[57px] 3xl:h-[58px] rounded-radius50 my-[auto]"
                            alt="Frame53"
                          />
                        }
                      ></Input>
                    </Column>
                  </Column>
                  <Column className="justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[82%]">
                    <Img
                      src="images/img_sosmed.svg"
                      className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] w-[66%]"
                      alt="sosmed"
                    />
                    <Column className="items-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Text className="Frame54">(021) 876 567 986</Text>
                        <Text className="Frame54">jbsme@official.com</Text>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Row>
              <Line className="bg-white_A700_33 h-[undefinedpx] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[83%]" />
              <Row className="items-center justify-between lg:mb-[28px] xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[48px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[83%]">
                <Row className="items-start w-[9%]">
                  <Img
                    src="images/img_ic_5.svg"
                    className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                    alt="ic"
                  />
                  <Text className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700_99 w-[auto]">
                    Jbs.me
                  </Text>
                </Row>
                <Text className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-white_A700_99 w-[auto]">
                  © Jbs.me 2022 all rights reserved
                </Text>
              </Row>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default JobseekerLandingPageDesktopPage;
